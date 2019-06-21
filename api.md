# MakeCode Arcade Display Strings API

## Enumerations

- [`FontName`](FontName.md)
- [`TextAlignment`](TextAlignment.md)

## `FontInfo` class

-  [`constructor(FontName, number)`](FontInfo.constructor.md)
- **Properties**
  -  [`font`](FontInfo.font.md)
  -  [`fontName`](FontInfo.fontName.md)
  -  [`height`](FontInfo.height.md)
  -  [`size`](FontInfo.size.md)
- **Public methods**
  - [`width(string)`](FontInfo.width.md) 

## `drawStrings` namespace
- [`createFontInfo(FontName, number)`](drawStrings.createFontInfo.md)
- [`height(FontInfo)`](drawStrings.height.md)
- [`width(string, FontInfo)`](drawStrings.width.md)
- [`write(string, Image, number, number, number, FontInfo)`](drawStrings.write.md)
- [`writeCenter(string, Image, number, number, FontInfo)`](drawStrings.writeCenter.md)
- [`writeMultiple(string[], Image, number, number, number, FontInfo, number)`](drawStrings.writeMultiple.md)
- [`writeMultipleCenter(string[], Image, number, number, FontInfo, number)`](drawStrings.writeMultipleCenter.md)
- [`writeWrapped(string, Image, number, number, number, number, FontInfo, number, number)`](drawStrings.writeWrapped.md)
