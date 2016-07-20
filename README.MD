# Notes on PSD to Landing Page Course

These are notes about the Udemy [PSD To a Creative Landing Page Using Twitter Bootstrap 3](https://www.udemy.com/psd-to-responsive-html5-css3-with-bootstrap-3/learn/v4/overview) course by Ehab Alaa.

## Known errors

In the `image` folder three files are missing and causing a 404 error:
* `prev.png`
* `next.png`
* `close.png`

## Extracting a layer from PhotoShop

1. Select a layer in History
1. Right click on its icon and choose `Select pixels...`. Now the layer is selected.
1. Copy the selection.
1. Go to `File | New` and give it a name. You will notice that the dimensions of the new file are the same as those of the selected layer.
1. Save and you will get a white rectangle.
1. Paste into it.

## Save for Web

If you don't see the "Save for Web" option under File menu, type `Ctrl+Shift+Alt+S`.

## Used on the website

1. [Owl Carousel](https://github.com/OwlFonk/OwlCarousel)
1. [Lightbox](http://lokeshdhakar.com/projects/lightbox2/)
1. [Wow Animations](http://mynameismatthieu.com/WOW/), also on [Github](https://github.com/matthieua/WOW). Read [Documentation](http://mynameismatthieu.com/WOW/docs.html) 
and [watch animations](http://daneden.github.io/animate.css/) by CSS class name.
1. [jQuery numbscroller Plugin](http://www.jqueryscript.net/demo/jQuery-Plugin-For-Counting-Up-Numbers-While-Scrolling-numscroller/)

## Vertical alignment

There are two possible ways to center vertically.

### 1. Adding a new class in HTML

Add `vertical-align` class to the container element:

```html
<div class="container text-center vertical-align"></div>
```

And here is the CSS part:

```css
.vertical-align {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
```

### 2. Using `display:flex`

Just add the following CSS code to the container style:

```css
#quotes {
    display: flex;
    align-items: center;
}
```

## Preview the website in VSCode

*  `Ctrl-Shift-P`
*  type `live`
*  choose `Start live server`
*  if you want to see the website in the browser, 
browse to [http://localhost:8181](http://localhost:8181)

## Hapi server

* install hapi: `npm install --save hapi`
* install nodemon: `npm install -g nodemon`
* create `server.js` file
* start nodemon: `nodemon -w ./ server.js`
* browse to [http://localhost:7777](http://localhost:7777)

