# Colorimeter

Preload and get yer image properties*.

* (r, g, b, brightness) so you can do whatever you want with them
* This module/Readme is a Work in Progress™

## The what

Most of the time GUIs and layouts call for various elements adjusting to conform to/complement an element in the composition. This usually involves images, videos or some other "composition". Colorimeter basically extracts color data from an image and finding out whether or not an image is light or dark. With this information, elements that visually interact with it can be programmed to be displayed accordingly.

See the DEMO

## How it works

Some kind of flowchart™:

`Image (in DOM) -> Preload -> Draw into a Canvas -> get ImageData -> Calculate brightness => finally: do whatever you want`

Simple usage:

```html
  <figure>
    <img src="/path/to/image.jpg" />

    <figcaption>
      This text overlaps the image
    <figcaption>
  <figure>
```

```js
  import Colorimeter from './path/to/Colorimeter';
  const figure = document.querySelector('img');

  // usage:
  // Colorimeter(image, thresold)
  // threshold defaults to 127, adjust as you see fit
  // -> returns a promise
  
  Colorimeter(img).then(data => {
    // check the demo console for the returned data
    console.log(data);

    // adds a .dark/.light class to parent container
    figure.parentElement.classList.add(data.description);

    // etc
  });
```

## Plans

Support for `<video>` and `<canvas>` elements.
Improve README and everything

### Call me

Comments? Suggestions? Issues? Please feel free to tweet or message me!
ezekielaquino@gmail.com or via @the_ezekiel on Twitter
