# writeMultipleCenter function

Draw an array of strings on the given image centered horizontally.

```typescript
drawStrings.writeMultipleCenter(text: string[], img: Image,
  y: number, color: number, fi: FontInfo): void
```

## Parameters

- `text: string[]` Strings to draw.
- `img: Image` Drawing canvas.
- `y: number` Vertical coordinate for top of first string.
- `color: number` Color to use when drawing text.
- `fi: FontInfo` Font to use.
- `spacing: number` Number of pixels to skip between strings.