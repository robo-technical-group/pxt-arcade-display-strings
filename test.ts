let background: Image = null
let pauseTime: number = 2000
let strings: string[] = [
    "Font5",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "",
    "Font8",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"]
let fonts: FontName[] = [
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font8,
    FontName.Font8,
    FontName.Font8,
    FontName.Font8]

/*
    export function writeWrapped(text: string, img: Image,
        x1: number, y1: number, x2: number, y2: number,
        align: TextAlignment, color: number,
        fi: FontInfo, startChar: number = 0, spacing: number = 0): number {
*/

// Text wrapping - left-justified
background = image.create(screen.width, screen.height)
let f: FontInfo = drawStrings.createFontInfo(FontName.Font8)
drawStrings.writeWrapped(
    'This is some text that should be drawn left-justified when it gets drawn on the screen. It should break at the hyphen.',
    background, 0, 0, screen.width, screen.height,
    TextAlignment.Left, 1, f, 0, 0)
scene.setBackgroundImage(background)
loops.pause(3000)

// Text wrapping - centered
background = image.create(screen.width, screen.height)
drawStrings.writeWrapped(
    'This is some text that should be centered when it gets drawn on the screen.',
    background, 0, 0, screen.width, screen.height,
    TextAlignment.Center, 1, f, 0, 0)
scene.setBackgroundImage(background)
loops.pause(3000)

// Text-wrapping - right-justified
background = image.create(screen.width, screen.height)
drawStrings.writeWrapped(
    'This is some text that should be drawn right-justified when it gets drawn on the screen. It should break at the hyphen.',
    background, 0, 0, screen.width, screen.height,
    TextAlignment.Right, 1, f, 0, 0)
scene.setBackgroundImage(background)
loops.pause(3000)

// Multiple blocks - left-justified
background = image.create(screen.width, screen.height)
drawStrings.writeWrapped(
    'Left-justified text\nwith a newline character left-half of the screen',
    background, 0, 0, screen.width / 2, screen.height,
    TextAlignment.Left, 1, f, 0, 0)
drawStrings.writeWrapped(
    'Left-justified text\nwith a newline character right-half of the screen',
    background, screen.width / 2, 0, screen.width, screen.height,
    TextAlignment.Left, 1, f, 0, 0)
scene.setBackgroundImage(background)
loops.pause(3000)

// Multiple blocks - Centered
background = image.create(screen.width, screen.height)
drawStrings.writeWrapped(
    'Centered text\nwith a newline character left-half of the screen',
    background, 0, 0, screen.width / 2, screen.height,
    TextAlignment.Center, 1, f, 0, 0)
drawStrings.writeWrapped(
    'Centered text\nwith a newline character right-half of the screen',
    background, screen.width / 2, 0, screen.width, screen.height,
    TextAlignment.Center, 1, f, 0, 0)
scene.setBackgroundImage(background)
loops.pause(3000)

// Multiple blocks - right-justified
background = image.create(screen.width, screen.height)
drawStrings.writeWrapped(
    'Right-justified text\nwith a newline character left-half of the screen',
    background, 0, 0, screen.width / 2, screen.height,
    TextAlignment.Right, 1, f, 0, 0)
drawStrings.writeWrapped(
    'Right-justified text\nwith a newline character right-half of the screen',
    background, screen.width / 2, 0, screen.width, screen.height,
    TextAlignment.Right, 1, f, 0, 0)
scene.setBackgroundImage(background)
loops.pause(3000)

// drawStrings.write() demo
// Not needed for JavaScript, as image.print() is available
for (let size: number = 1; size <= 4; size++) {
    background = image.create(screen.width, screen.height)
    let y: number = 0
    for (let index = 0; index <= strings.length - 1; index++) {
        let f: FontInfo = drawStrings.createFontInfo(fonts[index], size)
        drawStrings.write(strings[index], background, 0, y, index + 1, f)
        y += drawStrings.height(f) + 1
    }   // for (index)
    scene.setBackgroundImage(background)
    loops.pause(pauseTime)
}   // for ( size )

// drawStrings.writeCenter() demo
// Also not needed for JavaScript, as image.printCenter() is available
for (let size: number = 1; size <= 4; size++) {
    background = image.create(screen.width, screen.height)
    let y: number = 0
    for (let index = 0; index <= strings.length - 1; index++) {
        let f: FontInfo = drawStrings.createFontInfo(fonts[index], size)
        drawStrings.writeCenter(strings[index], background, y, index + 1, f)
        y += drawStrings.height(f) + 1
    }   // for (index)
    scene.setBackgroundImage(background)
    loops.pause(pauseTime)
}   // for ( size )

let strings_f5: string[] = [
    "Font5",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"
]
let strings_f8: string[] = [
    "Font8",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"
]

for (let size: number = 1; size <= 4; size++) {
    background = image.create(screen.width, screen.height)
    let y: number = 0
    let f: FontInfo = drawStrings.createFontInfo(FontName.Font5, size)
    drawStrings.writeMultiple(strings_f5, background, 0, 0, size * 2, f)
    f = drawStrings.createFontInfo(FontName.Font8, size)
    drawStrings.writeMultiple(strings_f8, background, 0, 30 * size, size * 2 + 1, f)
    scene.setBackgroundImage(background)
    loops.pause(pauseTime)
}   // for ( size )

for (let size: number = 1; size <= 4; size++) {
    background = image.create(screen.width, screen.height)
    let y: number = 0
    let f: FontInfo = drawStrings.createFontInfo(FontName.Font5, size)
    drawStrings.writeMultipleCenter(strings_f5, background, 0, size * 2, f)
    f = drawStrings.createFontInfo(FontName.Font8, size)
    drawStrings.writeMultipleCenter(strings_f8, background, 30 * size, size * 2 + 1, f)
    scene.setBackgroundImage(background)
    loops.pause(pauseTime)
}   // for ( size )

