import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  variation: {
    width: string;
    height: string;
  };
};

const Image = ({ src, alt, variation }: ImageProps) => {
  const classes = {
    imageStyle: {
      width: variation.width,
      height: variation.height,
    },
  };
  return <img src={src} alt={alt} style={classes.imageStyle} />;
};

export default Image;
