enum FontName {
    //% block="Font5"
    Font5 = 0,
    //% block="Font8"
    Font8
}   // enum Font

/**
 * Extension for writing text to an image.
 */
//% weight=0 color=#b8860b icon="\uf040" block="Draw Text"
//% advanced=true
namespace displayStrings {
    const defaultFont: image.Font = image.font8;

    /**
     * Width of a string in pixels for the given font.
     */
    //% blockId=drawstring_width
    //% block="width of %text in %font"
    //% text.defl="Hello!"
    export function width(text: string, font: image.Font): number {
        if (!font) {
            font = defaultFont;
        }   // if (!font)
        return text.length * font.charWidth;
    }   // width()

    /**
     * Height of a given font.
     */
    //% blockId=drawstring_height
    //% block="height of font %font"
    export function height(font: image.Font): number {
        return font.charHeight;
    }   // height()

    /**
     * Draw a string on the given image.
     */
    //% blockId=drawstring_write
    //% block="write %text on image %img=screen_image_picker at x %x y %y with color %color=colorindexpicker in font %font"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1 color.min=0 color.max=15
    export function write(text: string, img: Image,
        x: number, y: number, color: color = 1, font: image.Font)
        : void {
        if (!font) {
            font = defaultFont;
        }   // if (!font)
        img.print(text, x, y, color, font);
    }   // write()

    /**
     * Draw a string on the given image centered horizontally.
     */
    //% blockId=drawstring_write_center
    //% block="write %text centered on image %img=screen_image_picker at y %y with color %color=colorindexpicker in font %font"
    //% text.defl="Hello!" x.defl=0 y.defl=0 color.defl=1
    export function writeCenter(text: string, img: Image,
        y: number, color: color = 1, font: image.Font): void {
        if (!font) {
            font = defaultFont;
        }   // if (!font)
        img.printCenter(text, y, color, font);
    }   // writeCenter()

    /**
     * Create a font object.
     */
    //% blockId=drawstring_font
    //% block="font %font"
    //% font.defl=Font.Font8
    export function font(font: FontName): image.Font {
        switch (font) {
            case FontName.Font5:
                return image.font5;

            case FontName.Font8:
            default:
                return image.font8;
        }   // switch ( font )
    }   // font()

    /**
     * Create a font object with size doubled.
     */
    //% blockId=drawstring_font_double
    //% block="font %font double-sized"
    //% font.defl=Font.Font8
    export function fontDouble(font: FontName): image.Font {
        switch (font) {
            case FontName.Font5:
                return image.doubledFont(image.font5);

            case FontName.Font8:
            default:
                return image.doubledFont(image.font8);
        }   // switch ( font )
    }   // fontDouble()

    /**
     * Create a font object scaled by a given multiplier.
     */
    //% blockId=drawstring_font_scaled
    //% block="font %font scaled %scale times"
    //% font.defl=Font.Font8 scale.defl=2
    export function fontScaled(font: FontName, scale: number): image.Font {
        switch (font) {
            case FontName.Font5:
                return image.scaledFont(image.font5, scale);

            case FontName.Font8:
            default:
                return image.scaledFont(image.font8, scale);
        }   // fontScaled()
    }   // fontScaled()
}   // namespace displayStrings
