# Tailwind CSS slant plugin

> A Tailwind CSS plugin that lets you create `slanted` elements easily.

## What does `slant` mean?

A `slant` means that it a slight angle to it, as opposed to being perfectly horizontal or vertical. However, it differs
from a `skew` in that the contents of the element have the same negative skew value applied.

## How does the `slant` plugin help?

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

## How to manually `slant` in Tailwind CSS

To make an element slanted in Tailwind CSS you can use the skew utility, this is how to do it manually with Tailwind CSS:

```html
<!-- Basic example -->
<div class="skew-x-[20deg]">
  <div class="-skew-x-[20deg]">Slant with Tailwind CSS</div>
</div>
<!-- Or alternatively -->
<div class="skew-x-[20deg] [&>*]:-skew-x-[20deg]">
  <div>Slant with Tailwind CSS</div>
</div>
```
