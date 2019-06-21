# writeWrapped function

Wrap a string within a bounding box.

```typescript
drawStringswriteWrapped(text: string, img: Image,
  x1: number, y1: number, x2: number, y2: number,
  align: TextAlignment, color: number, fi: FontInfo,
  startChar: number = 0, spacing: number = 0): number
```

## Parameters

- `text: string` String to draw.
- `img: Image` Drawing canvas.
- `x1: number` Horizontal coordinate of top-left of bounding box.
- `y1: number` Vertical coordinate of top-left of bounding box.
- `x2: number` Horizontal coordinate of bottom-right of bounding box.
- `y2: number` Vertical coordinate of bottom-right of bounding box.
- `align: TextAlignment` Value from the [`TextAlignment`](TextAlignment.md) enum for the alignment of text within bounding box.
- `color: number` Color to use when drawing text.
- `fi: FontInfo` Font to use.
- `startChar: number` Starting character of string.
- `spacing: number` Pixels to skip between lines.

## Return value

A `number` representing the next character that needs to be drawn; -1 if the text fits within bounding box.