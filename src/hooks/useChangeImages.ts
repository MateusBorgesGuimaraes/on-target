'use client';

import React from 'react';

type Images = {
  id: number;
  image: string;
};

export const useChangeImages = (images: Images[]) => {
  const [selectedImage, setSelectedImage] = React.useState(images[0].id);
  const [image, setImage] = React.useState(images[0]);

  const changeImage = (id: number) => {
    setSelectedImage(id);
    const find = images.find((image) => image.id === id);
    if (find) setImage(find);
  };

  return { changeImage, selectedImage, image };
};
