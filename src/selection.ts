import * as images from "./objects/*/*.png";
import { Random } from "random-js";

// el proposito de esta libreria es generar numeros aleatorios matemáticamente correctos, ya que Math.random() no es seguro
const r = new Random();

function getRandomItem(object: object): Array<string> {
  const recyclableType: string[] = Object.keys(object);
  const random: number = r.integer(0, recyclableType.length - 1);
  const selectedType: string = recyclableType[random];

  const recyclableImages: object = object[selectedType];
  const imgList: string[] = Object.values(recyclableImages);
  const randomIndex = r.integer(0, imgList.length - 1);
  const selectedImage: string = imgList[randomIndex];
  return [selectedType, selectedImage];
}

export function createImage(src: string): HTMLImageElement {
  const imageURL = new URL(src, import.meta.url);
  const image = document.createElement("img");
  image.src = imageURL.toString();

  return image;
}

export default function startGame(): Array<string> {
  const [recyclableType, recyclableImage] = getRandomItem(images);

  return [recyclableType, recyclableImage];
}
