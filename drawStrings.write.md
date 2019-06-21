# write function

Draw a string on the given image.

```typescript
drawStrings.write(text: string, img: Image, x: number,
  y: number, color: number, fi: FontInfo): void
```

## Parameters

- `text: string` String to draw.
- `img: Image` Drawing canvas.
- `x: number` Horizontal coordinate for top-left of string.
- `y: number` Vertical coordinate for top-left of string.
- `color: number` Color to use when drawing text.
- `fi: FontInfo` Font to use.