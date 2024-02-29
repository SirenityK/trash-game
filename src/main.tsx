import { hydrate } from "preact";
import { trashcan, getColor } from "./trashcan";

var selection: any;

let trashcans = document.getElementById("trash-locations");
for (let i = 0; i < trashcans.children.length; i++) {
  let type = getColor(i);
  hydrate(trashcan(type), trashcans.children[i]);
  hydrate(<h1>{type}</h1>, trashcans.children[i]);
}

(async () => {
  selection = await import("./selection");
})();

declare global {
  interface Window {
    start: () => void;
  }
}

class RecyclingGame {
  private recycleCard: HTMLElement;
  private startButton: HTMLElement;
  private imageBlock: HTMLImageElement;
  private caseElement: HTMLElement;
  private image: HTMLImageElement;
  private currentRecyclable: string;

  constructor() {
    this.recycleCard = document.getElementById("recycle-card") as HTMLElement;
    this.startButton = document.getElementById("start") as HTMLElement;
    this.imageBlock = document.getElementById("showcase") as HTMLImageElement;
    this.caseElement = document.getElementById("case") as HTMLElement;
    this.setup();
  }

  private setup(): void {
    this.recycleCard.style.display = "none";
    this.startButton.addEventListener("click", this.start.bind(this));
  }

  private showRecycleCard(): void {
    this.recycleCard.style.display = "grid";
  }

  private showStartButton(): void {
    this.startButton.style.display = "block";
  }

  private hideRecycleCard(): void {
    this.recycleCard.style.display = "none";
  }

  private hideStartButton(): void {
    this.startButton.style.visibility = "hidden";
  }

  public async start(): Promise<void> {
    this.hideStartButton();
    const [recyclableType, recyclableImage] = await this.selectRecyclable();
    this.currentRecyclable = recyclableType;

    this.image = selection.createImage(recyclableImage);
    this.imageBlock.src = recyclableImage;
    this.showRecycleCard();

    let counter: number = 4;
    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        this.hideRecycleCard();
        this.showStartButton();
        this.caseElement.appendChild(this.image);
      }
    }, 1000);
  }

  private selectRecyclable(): Promise<Array<string>> {
    const choices = selection.default();
    this.currentRecyclable = choices[0];
    return choices;
  }
}

const game = new RecyclingGame();
window.start = game.start.bind(game);
