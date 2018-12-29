# Terminology

The following are common terms used when discussing responsive or adaptive design.

## Fluid Grids
This is an arrangement of organization of content lacking a fixed width, which is composed of intersecting vertical and horizontal lines. This grid is used to structure content in a predictable and consistent manner by adjusting the size and positioning of the elements contained within.

## Flexible Images
This is any visual content or media that adjusts to fit a user’s screen size. Usually these are images placed within a flexible grid that has the max-width CSS rule applied at 100 percent. In layman’s terms, this prevents images from being larger than the grids in which they’re placed while also allowing images to resize without sacrificing any of their aspect ratio. To avoid slow loading times, designers can compress the  images’ resolutions when displayed on smaller devices. Another method is to set the width as a percentage of the width of the page as a whole.

## Media queries
A CSS3 module that controls how the styles within the media attribute are applied. Different styles are applied according to a number of device specific qualities such as screen width, height, orientation, etc.

## Breakpoint
A *breakpoint* is where a design and layout changes based on the available screen/browser size.

As a minimum, most sites should have 2 breakpoints, creating 3 specific layout options.

## Hardware Pixels
The number of actual or physical pixels available on a devices screen.

## DIP - Device Independent Pixel
As its name implies, a device independent pixel is a unit of measurement, that actually relates pixels to a real distance. The idea being that a device independent pixel will take up the same amount of space on a display regardless of the pixel density of the display.
<iframe width="560" height="315" src="https://www.youtube.com/embed/6P9uLyvcd3Y" frameborder="0" allowfullscreen></iframe>

## DPR - Device Pixel Ratio
Device Pixel Ratio is the number of hardware pixels divided by the number of Device Independent Pixels. So a device that has 1080 hardware pixels and 540 DIP’s would have a DPR of 2.

## Viewport
The viewport defines the area of the screen that the browser can render content to.
The viewport size is determined by dividing the number of physical pixels by the Device Pixel Ratio. This is the number of pixels available to the CSS properties.
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
This is what allows devices to reflow content.

Please also read information on the viewport as specified by the [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).
<iframe width="560" height="315" src="https://www.youtube.com/embed/4DV16H-Bc_Q" frameborder="0" allowfullscreen></iframe>
