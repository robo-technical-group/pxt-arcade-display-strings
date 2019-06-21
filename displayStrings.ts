/**
 * Extension for writing text to an image.
 */
/**
 * Enumerations
 */
enum FontName {
    Font5,
    Font8,
    Default
}   // enum Font

enum TextAlignment {
    Left,
    Center,
    Right
}   // enum TextAlignment

/**
 * Interfaces
 */
interface BreakLocation {
    char: string
    index: number
}   // breakLocation

/**
 * Immutable class that represents a font.
 */
//% blockNamespace=drawStrings
class FontInfo {
    private _fontName: FontName
    private _size: number
    private _font: image.Font

    /**
     * Default constructor.
     * @param {FontName} font - Font to use.
     * @param {number} size - Size of font.
     */
    constructor(font: FontName, size: number) {
        this._fontName = font
        this._size = size
        let f: image.Font
        switch (font) {
            case FontName.Font5:
                f = image.font5
                break

            case FontName.Font8:
            case FontName.Default:
            default:
                f = image.font8
                break
        }   // switch (font)

        switch (size) {
            case 1:
                this._font = f
                break

            case 2:
                this._font = image.doubledFont(f)
                break

            default:
                this._font = image.scaledFont(f, size)
                break
        }   // switch (size)
    }   // constructor()

    /**
     * Getters and setters
     */
    /**
     * @return {image.Font} The font for the object.
    */
    public get font(): image.Font {
        return this._font
    }   // get font()

    /**
     * @return {FontName} The font name for the object.
     */
    public get fontName(): FontName {
        return this._fontName
    }   // get fontName()

    /**
     * @return {number} The font's height.
     */
    public get height(): number {
        return this._font.charHeight
    }   // height()

    /**
     * @return {number} The size of the font.
     */
    public get size(): number {
        return this._size
    }   // get size()

    /**
     * Public methods
     */
    /**
     * Returns the width of a string in the specified font.
     * @param {string} text - The text to measure.
     * @return {number} - The width of the text in pixels.
     */
    public width(text: string): number {
        return (this._font.charWidth) * text.length
    }   // get width()
}   // class FontInfo

//% weight=0 color=#b8860b icon="\uf040" block="Draw Text"
//% advanced=true
namespace drawStrings {
    const BREAK_CHARS: string = ' -\n\t'
    const DEFAULT_FONT: FontName = FontName.Font8
    const DEFAULT_SIZE: number = 1

    /**
     * Create a font info object.
     * @param {FontName} font - Font to use.
     * @param {number} size - Size (multiplier) of font to use.
     * @return {FontInfo}
     */
    //% blockId=drawstring_createFont
    //% block="font %font || with size %size"
    //% font.defl=FontName.Font8 size.defl=1
    export function createFontInfo(font: FontName,
        size: number = 0): FontInfo {
        if (size < 1) {
            size = DEFAULT_SIZE
        }   // if (!size)
        return new FontInfo(font, size)
    }   // createFont()

    /**
     * Find the next breaking location in a string.
     * @param {string} text - String to search.
     * @param {number} start - Starting location for search.
     * @return {BreakLocation} Character and location of next break.
     */
    function findNextBreak(text: string, start: number = 0): BreakLocation {
        let toReturn = {
            char: '',
            index: text.length
        }
        for (let char of BREAK_CHARS) {
            let index = text.indexOf(char, start)
            if (index > -1 && index < toReturn.index) {
                toReturn.index = index
                toReturn.char = char
            }   // if (index && index < nextBreak)
        }   // for (char)
        return toReturn
    }   // findNextBreak()

    /**
     * @param {FontInfo} fi - Font to measure.
     * @return {number} Height of font in pixels.
     */
    //% blockId=drawstring_height
    //% block="height of font %fi"
    //% fi.shadow="variables_get"
    export function height(fi: FontInfo): number {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT)
        }   // if (!fi)
        return fi.height
    }   // height()

    /**
     * Width of a string in pixels for the given font.
     * @param {string} text - Text to measure.
     * @param {FontInfo} fi - Font to use.
     * @return {number} Width of string in pixels.
     */
    //% blockId=drawstring_width
    //% block="width of %text in %fi"
    //% text.defl="Hello!" fi.shadow="variables_get"
    export function width(text: string, fi: FontInfo): number {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT)
        }   // if (!fi)
        return fi.width(text)
    }   // width()

    /**
     * Draw a string on the given image.
     * @param {string} text - String to draw.
     * @param {Image} img - Drawing canvas.
     * @param {number} x - Horizontal coordinate for top-left of string.
     * @param {number} y - Vertical coordinate for top-left of string.
     * @param {color} color - Color to use when drawing text.
     * @param {FontInfo} fi - Font to use.
     */
    //% blockId=drawstring_write
    //% block="write %text on image %img=screen_image_picker at x %x y %y with color %color=colorindexpicker in font %fi"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1 color.min=0 color.max=15 fi.shadow="variables_get"
    //% hidden
    export function write(text: string, img: Image,
        x: number, y: number, color: color, fi: FontInfo)
        : void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT)
        }   // if (!fi)
        img.print(text, x, y, color, fi.font)
    }   // write()

    /**
     * Draw a string on the given image centered horizontally.
     * @param {string} text - String to draw.
     * @param {Image} img - Drawing canvas.
     * @param {number} y - Vertical coordinate for top of string.
     * @param {color} color - Color to use when drawing text.
     * @param {FontInfo} fi - Font to use.
     */
    //% blockId=drawstring_write_center
    //% block="write %text centered on image %img=screen_image_picker at y %y with color %color=colorindexpicker in font %fi"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1 fi.shadow="variables_get"
    //% hidden
    export function writeCenter(text: string, img: Image,
        y: number, color: color, fi: FontInfo): void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT)
        }   // if (!fi)
        img.printCenter(text, y, color, fi.font)
    }   // writeCenter()

    /**
     * Draw an array of strings on the given image.
     * @param {string[]} text - Strings to draw.
     * @param {Image} img - Drawing canvas.
     * @param {number} x - Horizontal coordinate for top-left of first string.
     * @param {number} y - Vertical coordinate for top-left of first string.
     * @param {color} color - Color to use when drawing text.
     * @param {FontInfo} fi - Font to use.
     * @param {number} spacing - Number of pixels to skip between strings.
     */
    //% blockId=drawstring_write_multi
    //% block="write strings %text on image %img=screen_image_picker at x %x y %y with color %color=colorindexpicker in font %fi || with spacing %spacing"
    //% text.shadow="variables_get" x.defl=0 y.defl=0 color.defl=1 color.min=0 color.max=15 spacing.defl=1 fi.shadow="variables_get"
    export function writeMultiple(text: string[], img: Image,
        x: number, y: number, color: color, fi: FontInfo,
        spacing: number = 1)
        : void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT)
        }   // if (!fi)

        let currY: number = y
        for (let t of text) {
            img.print(t, x, currY, color, fi.font)
            currY += (fi.height + spacing)
        }   // for ( t )
    }   // writeMultiple()

    /**
     * Draw an array of strings on the given image centered horizontally.
     * @param {string[]} text - Strings to draw.
     * @param {Image} img - Drawing canvas.
     * @param {number} y - Vertical coordinate for top of first string.
     * @param {color} color - Color to use when drawing text.
     * @param {FontInfo} fi - Font to use.
     * @param {number} spacing - Number of pixels to skip between strings.
     */
    //% blockId=drawstring_write_multi_center
    //% block="write strings %text centered on image %img=screen_image_picker at y %y with color %color=colorindexpicker in font %fi || with spacing %spacing"
    //% text.shadow="variables_get" y.defl=0 color.defl=1 color.min=0 color.max=15 spacing.defl=1 fi.shadow="variables_get"
    export function writeMultipleCenter(text: string[], img: Image,
        y: number, color: color, fi: FontInfo,
        spacing: number = 1)
        : void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT)
        }   // if (!fi)

        let currY: number = y
        for (let t of text) {
            img.printCenter(t, currY, color, fi.font)
            currY += (fi.height + spacing)
        }   // for ( t )
    }   // writeMultipleCenter()

    /**
     * Wrap a string within a bounding box.
     * @param {string} text - String to draw.
     * @param {Image} img - Drawing canvas.
     * @param {number} x1 - Horizontal coordinate of top-left of bounding box.
     * @param {number} y1 - Vertical coordinate of top-left of bounding box.
     * @param {number} x2 - Horizontal coordinate of bottom-right of bounding box.
     * @param {number} y2 - Horizontal coordinate of bottom-right of bounding box.
     * @param {TextAlignment} align - Alignment of text within bounding box.
     * @param {number} color - Color to use when drawing.
     * @param {FontInfo} fi - Font to use.
     * @param {number} startChar - Starting character of string.
     * @param {number} spacing - Pixels to skip between lines.
     * @return {number} Next character that needs to be drawn;
     *                  -1 if text fit within bounding box.
     */
    export function writeWrapped(text: string, img: Image,
        x1: number, y1: number, x2: number, y2: number,
        align: TextAlignment, color: number,
        fi: FontInfo, startChar: number = 0, spacing: number = 0): number {
        let maxLength: number = Math.floor((x2 - x1 + 1) / fi.font.charWidth)
        let currY: number = y1
        let toReturn = startChar
        while (currY + fi.font.charHeight - 1 <= y2 && toReturn > -1) {
            let previousBreak: number = toReturn
            let nextBreak: BreakLocation = findNextBreak(text, previousBreak + 1)
            // game.splash('pSpace ' + previousSpace + " nSpace " + nextSpace + ' nReturn ' + nextReturn + ' nBreak ' + nextBreak)
            while (nextBreak.index <= toReturn + maxLength && nextBreak.index < text.length && nextBreak.char !== '\n') {
                previousBreak = nextBreak.index
                nextBreak = findNextBreak(text, previousBreak + 1)
                // game.splash('pSpace ' + previousSpace + " nSpace " + nextSpace + ' nReturn ' + nextReturn + ' nBreak ' + nextBreak)
            }   // while (nextSpace <= toReturn + maxLength && nextSpace !== -1)
            if ((nextBreak.char === '\n' || nextBreak.index >= text.length) && nextBreak.index - toReturn <= maxLength) {
                previousBreak = nextBreak.index
            }   // if ((nextBreak.char === '\n' ...)
            let toDraw: string
            if (text[previousBreak] === '-') {
                toDraw = text.substr(toReturn, previousBreak - toReturn + 1)
            } else {
                toDraw = text.substr(toReturn, previousBreak - toReturn)
            }   // if (text[previousBreak] === '-')
            /*
            game.showLongText('Drawing ' + toDraw + ' length ' + text.length + ' 2Ret ' + toReturn + ' pSpace ' + previousSpace + ' nSpace ' + nextSpace + ' nReturn ' + nextReturn + ' nBreak ' + nextBreak, DialogLayout.Center)
            game.showLongText('Requested length ' + (previousSpace - toReturn) + ' Actual length ' + toDraw.length, DialogLayout.Center)
            if (previousSpace - toReturn !== toDraw.length) {
                game.showLongText('Requested length ' + (previousSpace - toReturn) + ' Actual length ' + toDraw.length, DialogLayout.Center)
            }   // if (previousSpace - toReturn !== toDraw.length)
            */
            let x: number
            let width: number = fi.width(toDraw)
            switch (align) {
                case TextAlignment.Left:
                    x = x1
                    break

                case TextAlignment.Center:
                    x = (x1 + x2 - width) / 2
                    break

                case TextAlignment.Right:
                    x = x2 - width
                    break
            }   // switch (align)
            img.print(toDraw, x, currY, color, fi.font)
            toReturn = previousBreak + 1
            if (toReturn >= text.length) {
                toReturn = -1
            }   // if (currChar >= currString.length)
            currY += fi.font.charHeight + spacing
        }   // while (currY + font.charHeight ...)
        return toReturn
    }   // writeWrapped()
}   // namespace drawStrings