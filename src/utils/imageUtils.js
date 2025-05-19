// src/utils/imageUtils.js

export const getCroppedImg = (imageSrc, pixelCrop) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.src = imageSrc;

  return new Promise((resolve) => {
    image.onload = () => {
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height,
        0, 0, pixelCrop.width, pixelCrop.height
      );

      resolve(canvas.toDataURL('image/jpeg'));
    };
  });
};
