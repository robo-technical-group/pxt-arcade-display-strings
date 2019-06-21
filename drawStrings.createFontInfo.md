# createFontInfo function

Create a `FontInfo` object. Used in the Blocks interface.

```typescript
drawStrings.createFontInfo(font: FontName,
  size: number = 0): FontInfo
```

## Parameters
- `font: FontName` A value from the [`FontName`](FontName.md) enum.
- `size: number` Multiplier for font. For example, to use a double-sized font, set `size` to 2.

## Return value

A `FontInfo` object representing the requested font.