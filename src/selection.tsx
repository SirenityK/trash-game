// @ts-ignore
import * as images from "./objects/*/*.png";
import { JSXInternal } from "preact/src/jsx";
import { Random } from "random-js";

// el proposito de esta libreria es generar numeros aleatorios matemáticamente correctos, ya que Math.random() no es seguro
const r = new Random();

function getRandomItem(object: object): [string, JSXInternal.Element] {
  const recyclableType: string[] = Object.keys(object);
  const random = r.integer(0, recyclableType.length - 1);
  const selectedType = recyclableType[random];

  const recyclableImages: object = object[selectedType];
  const imgList: string[] = Object.values(recyclableImages);
  const randomIndex = r.integer(0, imgList.length - 1);
  const selectedImage = imgList[randomIndex];

  return [selectedType, image(selectedImage)];
}

export function image(src: string) {
  // @ts-ignore
  const imageURL = new URL(src, import.meta.url).toString();
  return <img src={imageURL} id={"showcase"} alt={"recyclable"} />;
}

export function RandomImage() {
  return getRandomItem(images);
}
