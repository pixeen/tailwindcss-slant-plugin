# Tailwind CSS slant plugin

A Tailwind CSS plugin that lets you create `slanted` elements easily.

## Getting Started

Install the plugin:

```bash
npm install -D tailwindcss-slant-plugin
# or
yarn add -D tailwindcss-slant-plugin
```

Modify the `tailwind.config.js` file:

```js
module.exports = {
  // --snip--
  plugins: [require("tailwindcss-slant-plugin")()],
};
```

## What does `slant` mean?

A slant is a slight angle, as opposed to being horizontal or vertical. However, it differs from a skew because the contents of the element have the same negative skew value applied.

The difference between skew and slant is demonstrated here:

![image](https://user-images.githubusercontent.com/808734/193603368-b5f1a367-eb9f-4aa3-a762-776e9c284b27.png)

## Usage

The slant plugin creates a slanted element without the need to apply a negative skew to the contents. You can customize the angle and axis of the slant.

```
slant-[axis]-[angle]
```

Valid class names:

```
slant-12
slant-x-12
slant-y-12
slant-[10deg]
slant-x-[10deg]
-slant-12
-slant-[10deg]
-slant-y-[10deg]
...etc
```

## Example

An example of a button that makes uses of the Tailwind CSS slant plugin:

```html
<div class="bg-black py-2 px-4 slant-x-[30deg]">
  <div class="font-bold text-white">Slanted Button</div>
</div>
```

![image](https://user-images.githubusercontent.com/808734/193592375-4e4ecd39-9ab9-4079-940e-3e440cf59185.png)

## Features

- Supports negative values
- Supports arbitrary values
- Supports x/y axis values or both at the same time

## Caveats

- A slanted element should have a block element as its child. Otherwise, the slant will not be applied, and the element will just be skewed.
