# Tailwind CSS slant plugin

> A Tailwind CSS plugin that lets you create `slanted` elements easily.

## What does `slant` mean?

A `slant` means that it a slight angle to it, as opposed to being perfectly horizontal or vertical. However, it differs
from a `skew` in that the contents of the element have the same negative skew value applied. To illustrate the difference between them:

![Screenshot from 2022-10-03 13-28-16](https://user-images.githubusercontent.com/808734/193566289-12b3e010-8dbc-4318-bf3d-c79a7863e525.png)

## Getting Started

Install the plugin:

```bash
npm install tailwindcss-slant-plugin
```

And add the following to the plugin section in the `tailwind.config.js` file:

```js
plugins: [
    require('tailwindcss-slant-plugin'),
]
```

## Usage examples

The slant plugin allow you to create a slanted element easily without having to worry about applying a negative skew to
the contents, or having a block child elements. You can customize the angle and axis of the slant.

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
