enum FontName {
    Font5,
    Font8,
    Default
}   // enum Font

/**
 * Immutable class that represents a font.
 */
//% blockNamespace=drawStrings
class FontInfo {
    private _fontName: FontName;
    private _size: number;
    private _font: image.Font;

    /**
     * Default constructor.
     * @param {FontName} font - Font to use.
     * @param {number} size - Size of font.
     */
    constructor(font: FontName, size: number) {
        this._fontName = font;
        this._size = size;
        let f: image.Font;
        switch (font) {
            case FontName.Font5:
                f = image.font5;
                break;

            case FontName.Font8:
            case FontName.Default:
            default:
                f = image.font8;
                break;
        }   // switch (font)

        switch (size) {
            case 1:
                this._font = f;
                break;

            case 2:
                this._font = image.doubledFont(f);
                break;

            default:
                this._font = image.scaledFont(f, size);
                break;
        }   // switch (size)
    }   // constructor()

    /**
     * Returns the font described by the object.
     * @return {image.Font} The font for the object.
    */
    public get font(): image.Font {
        return this._font;
    }   // get font()

    /**
     * Returns the height of the font.
     * @return {number} The font's height.
     */
    public get height(): number {
        return this._font.charHeight;
    }   // height()

    /**
     * Returns the font name of the object.
     * @return {FontName} The font name for the object.
     */
    public get fontName(): FontName {
        return this._fontName;
    }   // get fontName()

    /**
     * Returns the size of the font.
     * @return {number} The font size.
     */
    public get size(): number {
        return this._size;
    }   // get size()

    /**
     * Returns the width of a string in the specified font.
     * @param {string} text - The text to measure.
     * @return {number} - The width of the text in pixels.
     */
    public width(text: string): number {
        return (this._font.charWidth + 1) * text.length;
    }   // get width()
}   // class FontInfo



/**
 * Extension for writing text to an image.
 */
//% weight=0 color=#b8860b icon="\uf040" block="Draw Text"
//% advanced=true
namespace drawStrings {
    const DEFAULT_FONT: FontName = FontName.Font8;
    const DEFAULT_SIZE: number = 1;


    /**
     * Create a font info object.
     */
    //% blockId=drawstring_createFont
    //% block="font %font || with size %size"
    //% font.defl=FontName.Font8 size.defl=1
    export function createFontInfo(font: FontName,
        size: number = 0): FontInfo {
        if (size < 1) {
            size = DEFAULT_SIZE;
        }   // if (!size)
        return new FontInfo(font, size);
    }   // createFont()

    /**
     * Width of a string in pixels for the given font.
     */
    //% blockId=drawstring_width
    //% block="width of %text in %font"
    //% text.defl="Hello!"
    export function width(text: string, fi: FontInfo): number {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT);
        }   // if (!fi)
        return fi.width(text);
    }   // width()

    /**
     * Height of a given font.
     */
    //% blockId=drawstring_height
    //% block="height of font %font"
    export function height(fi: FontInfo): number {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT);
        }   // if (!fi)
        return fi.height;
    }   // height()

    /**
     * Draw a string on the given image.
     */
    //% blockId=drawstring_write
    //% block="write %text on image %img=screen_image_picker at x %x y %y with color %color=colorindexpicker in font %font"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1 color.min=0 color.max=15
    //% hidden
    export function write(text: string, img: Image,
        x: number, y: number, color: color, fi: FontInfo)
        : void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT);
        }   // if (!fi)
        img.print(text, x, y, color, fi.font);
    }   // write()

    /**
     * Draw a string on the given image centered horizontally.
     */
    //% blockId=drawstring_write_center
    //% block="write %text centered on image %img=screen_image_picker at y %y with color %color=colorindexpicker in font %font"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1
    //% hidden
    export function writeCenter(text: string, img: Image,
        y: number, color: color, fi: FontInfo): void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT);
        }   // if (!fi)
        img.printCenter(text, y, color, fi.font);
    }   // writeCenter()

    /**
     * Draw an array of strings on the given image.
     */
    //% blockId=drawstring_write_multi
    //% block="write strings %text on image %img=screen_image_picker at x %x y %y with color %color=colorindexpicker in font %font || with spacing %spacing"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1 color.min=0 color.max=15 spacing.defl=1
    export function writeMultiple(text: string[], img: Image,
        x: number, y: number, color: color, fi: FontInfo,
        spacing: number = 1)
        : void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT);
        }   // if (!fi)

        let currY: number = y;
        for (let t of text) {
            img.print(t, x, currY, color, fi.font);
            currY += (fi.height + spacing);
        }   // for ( t )
    }   // writeMultiple()

    /**
     * Draw an array of strings on the given image centered horizontally.
     */
    //% blockId=drawstring_write_multi_center
    //% block="write strings %text centered on image %img=screen_image_picker at y %y with color %color=colorindexpicker in font %font || with spacing %spacing"
    //% text.defl="Hello!" y.defl=0 color.defl=1 color.min=0 color.max=15 spacing.defl=1
    export function writeMultipleCenter(text: string[], img: Image,
        y: number, color: color, fi: FontInfo,
        spacing: number = 1)
        : void {
        if (!fi) {
            fi = createFontInfo(DEFAULT_FONT);
        }   // if (!fi)

        let currY: number = y;
        for (let t of text) {
            img.printCenter(t, currY, color, fi.font);
            currY += (fi.height + spacing);
        }   // for ( t )
    }   // writeMultipleCenter()
}   // namespace drawStrings