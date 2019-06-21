# Display Strings API

## `FontInfo` class

  -  [`constructor(FontName, number)`](FontInfo.constructor.md)
  - **Properties**
    -  `font`
    -  `fontName`
    -  `height`
    -  `size`
  - **Public methods**
	- `width(string)` 

## `drawStrings` namespace
  - `createFontInfo(FontName, number)`
  - `height(FontInfo)`
  - `width(string, FontInfo)`
  - `write(string, Image, number, number, number, FontInfo)`
  - `writeCenter(string, Image, number, number, FontInfo)`
  - `writeMultiple(string[], Image, number, number, number, FontInfo, number)`
  - `writeMultipleCenter(string[], Image, number, number, FontInfo, number)`
  - `writeWrapped(string, Image, number, number, number, number, FontInfo, number, number)`
