import { animated, SpringValue, SpringValues } from "@react-spring/web";
import { useId } from "react";

interface ImageData {
  asset: string;
  width: number;
  height: number;
  alt: string;
}

const sourceOf = (data: ImageData) => {
    return `art-gallery/char-design/${data.asset}`
}

const scaled = (data: ImageData, scaleXY: number) => {
    return { maxWidth: (data.width * scaleXY), maxHeight: (data.height * scaleXY)}
}

const scaledXY = (data: ImageData, scaleX: number, scaleY: number) => {
    return { maxWidth: (data.width * scaleX), maxHeight: (data.height * scaleY)}
}

const Image = (props: {sourceFolder: string, data: ImageData, style: SpringValues}) => {
  const randID = useId();

  return (
    <animated.a
      href={`art-gallery/${props.sourceFolder}/${props.data.asset}`}
      data-pswp-width={props.data.width}
      data-pswp-height={props.data.height}
      key={`${props.sourceFolder}-` + randID}
      target="_blank"
      rel="noreferrer"
      className="w-full"
      style={props.style}
    >
      <animated.img
        src={`art-gallery/${props.sourceFolder}/${props.data.asset}`}
        alt={props.data.alt}
        className="w-full"
      />
    </animated.a>
  );
};

export default animated(Image);