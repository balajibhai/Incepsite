import React from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  const classes = {
    imageStyle: {
      width: "300px",
      height: "334px",
    },
  };
  return <img src={src} alt={alt} style={classes.imageStyle} />;
};

export default Image;
