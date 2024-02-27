const recycleCard = document.getElementById("recycle-card") as HTMLElement;
const start = document.getElementById("start") as HTMLElement;
const imageBlock = document.getElementById("showcase") as HTMLImageElement;
const caseElement = document.getElementById("case") as HTMLElement;
recycleCard.style.display = "none";
var image: HTMLImageElement;

interface Window {
  start: () => void;
}

window.start = function () {
  (async () => {
    const game = await import("./selection");
    const [recyclableType, recyclableImage] = game.default();
    image = game.createImage(recyclableImage);
    imageBlock.src = recyclableImage;
  })();
  start.style.visibility = "hidden";
  recycleCard.style.display = "grid";

  let counter: number = 2;
  const interval = setInterval(function (): void {
    counter--;
    if (counter < 0) {
      clearInterval(interval);
      recycleCard.style.display = "none";
      start.style.display = "block";
      caseElement.appendChild(image);
    }
  }, 1000);
};
