# Tailwind CSS slant plugin

A Tailwind CSS plugin that lets you create `slanted` elements easily.

> This plugin is currently in development, do not use in production.

## What does `slant` mean?

A `slant` means that it a slight angle to it, as opposed to being perfectly horizontal or vertical. However, it differs
from a `skew` in that the contents of the element have the same negative skew value applied. To illustrate the difference between them:

![Screenshot from 2022-10-03 13-28-16](https://user-images.githubusercontent.com/808734/193566289-12b3e010-8dbc-4318-bf3d-c79a7863e525.png)

## Getting Started

Install the plugin:

```bash
npm install tailwindcss-slant-plugin
```

Modify the `tailwind.config.js` file:

```js
module.exports = {
  // --snip--
  plugins: [require("tailwindcss-slant-plugin")()],
};
```

## Features

- Supports negative values
- Supports arbitrary degree values
- Supports separate x and y axis values

## Usage examples

The slant plugin allow you to create a slanted element easily without having to worry about applying a negative skew to
the contents. You can customize the angle and axis of the slant.

```html
<div class="slant-x-12">
  <div>Slant</div>
</div>

<div class="-slant-x-12">
  <div>Negative Slant</div>
</div>

<div class="slant-x-[30deg]">
  <div>Arbitrary Slant</div>
</div>

<div class="-slant-x-[30deg]">
  <div>Negative Arbitrary Slant</div>
</div>
```

## Important caveats

- A slanted element should have a block element as its child, otherwise the slant will not be applied and the element will simply be skewed.
