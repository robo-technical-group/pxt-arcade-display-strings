# writeMultiple function

Draw an array of strings on the given image.

```typescript
drawStrings.writeMultiple(text: string[], img: Image,
  x: number, y: number,
  color: number, fi: FontInfo, spacing: number = 1): void
```

## Parameters

- `text: string[]` Strings to draw.
- `img: Image` Drawing canvas.
- `x: number` Horizontal coordinate for top-left of string.
- `y: number` Vertical coordinate for top-left of string.
- `color: number` Color to use when drawing text.
- `fi: FontInfo` Font to use.
- `spacing: number` Number of pixels to skip between strings.