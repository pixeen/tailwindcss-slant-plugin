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

Modify the `tailwind.config.js` file:

```js
module.exports = {
  // --snip--
  plugins: [require("tailwindcss-slant-plugin")()],
};
```

## Usage examples

The slant plugin allow you to create a slanted element easily without having to worry about applying a negative skew to
the contents. You can customize the angle and axis of the slant.

```
slant-[axis]-[angle]
```

Some examples:

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

## Real world example

An example of a button that makes uses of the Tailwind CSS slant plugin:

```html
<div class="bg-black py-2 px-4 font-bold text-white slant-x-[30deg]">
  <div>Slanted Button</div>
</div>
```

![image](https://user-images.githubusercontent.com/808734/193592375-4e4ecd39-9ab9-4079-940e-3e440cf59185.png)

## Features

- Supports negative values
- Supports arbitrary values
- Supports x and y axis values or both at the same time

## Caveats

- A slanted element should have a block element as its child. Otherwise, the slant will not be applied, and the element will simply be skewed.
