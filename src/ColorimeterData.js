function ColorimeterData(image, threshold = 127) {
  window.ImageInfo = window.ImageInfo || {};

  console.log(Object.keys(ImageInfo).length)

  if (window.ImageInfo[image.src]) { return window.ImageInfo[image.src]; }

  const values = {
    naturalWidth: image.naturalWidth,
    naturalHeight: image.naturalHeight,
    colors: {
      r: 0,
      g: 0,
      b: 0
    },
    average: 0,
    brightness: 0,
    description: null,
    isDark: false,
    isLight: false,
    threshold: threshold
  };
  let colorSum = 0;

  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

  for (let i = 0; i < imageData.length; i += 4) {
    values.colors.r = imageData[i];
    values.colors.g = imageData[i + 1];
    values.colors.b = imageData[i + 2];

    values.average = Math.floor((values.colors.r + values.colors.g + values.colors.b) / 3);
    colorSum += values.average;
  }

  values.brightness = Math.floor(colorSum / (image.width * image.height));
  values.description = values.brightness <= threshold ? 'dark' : 'light';
  values.isDark = values.brightness <= threshold;
  values.isLight = !values.isDark;

  window.ImageInfo[image.src] = values;

  return values;
}

export default ColorimeterData;