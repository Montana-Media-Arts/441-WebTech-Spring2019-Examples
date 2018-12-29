# Responsive Style Application

A responsive site serves or renders up the page differently depending on the qualities of the device (ie. Screen size). This means that we need to be capable of selecting different devices!

We can do this using **Media Queries**.

One of the easiest ways to do this is to add additional style sheets in your page, with a media query to choose it.

In the below example, we add a second style sheet, that we specify in its label as applying to screen sizes “over 500px”. To accomplish this is the code, we use a media query in our link element that states to reference this style sheet when the scree is larger than 500px.

```html
<link rel="stylesheet" href="styles.css">

<link rel="stylesheet" media="screen and (min-width:500px)" href="over500.css">
```

Another way of applying a media query is directly in your CSS file. The below example will only execute style definitions if the requirement is met.

```css
@media screen and (min-width: 500px) and (max-width: 600px) {
	/* Your Code Goes Here */
}
```

## Most Common Media Queries
The most common media queries are

### `min-width: `
Which is executed with the pixel amount is greater than the set number.

### `max-width: `
Which is executed when the browser is less than the number of pixels specified.

## How to Choose Breakpoints
> "Start designing from the content out, rather than the canvas in." - [Mark Bouton](http://www.markboulton.co.uk/journal/a-richer-canvas)

Let the content dictate the breakpoint, not the device of the 'now'.

[Why You Don't need Device Specific Breakpoints](https://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints)

<iframe width="560" height="315" src="https://www.youtube.com/embed/M3eZu6jho60" frameborder="0" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/17XgkPFq6eY" frameborder="0" allowfullscreen></iframe>
