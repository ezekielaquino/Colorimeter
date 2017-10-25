import ColorimeterData from './ColorimeterData';

function Colorimeter(image, threshold) {
  return new Promise(resolve => {
    image.addEventListener('load', () => {
      resolve(ColorimeterData(image, threshold));
    });

    image.src = image.dataset.src;
  });
}

export default Colorimeter;