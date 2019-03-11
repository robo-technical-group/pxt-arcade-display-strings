let background: Image = null;
let pauseTime: number = 2000;
let strings: string[] = [
    "Font5",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "",
    "Font8",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"];
let fonts: FontName[] = [
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font8,
    FontName.Font8,
    FontName.Font8,
    FontName.Font8];

for (let size: number = 1; size <= 4; size++) {
    background = image.create(scene.screenWidth(), scene.screenHeight());
    let y: number = 0;
    for (let index = 0; index <= strings.length - 1; index++) {
        let f: FontInfo = drawStrings.createFontInfo(fonts[index], size);
        drawStrings.write(strings[index], background, 0, y, index + 1, f);
        y += drawStrings.height(f) + 1;
    }   // for (index)
    scene.setBackgroundImage(background);
    loops.pause(pauseTime);
}   // for ( size )

for (let size: number = 1; size <= 4; size++) {
    background = image.create(scene.screenWidth(), scene.screenHeight());
    let y: number = 0;
    for (let index = 0; index <= strings.length - 1; index++) {
        let f: FontInfo = drawStrings.createFontInfo(fonts[index], size);
        drawStrings.writeCenter(strings[index], background, y, index + 1, f);
        y += drawStrings.height(f) + 1;
    }   // for (index)
    scene.setBackgroundImage(background);
    loops.pause(pauseTime);
}   // for ( size )

let strings_f5: string[] = [
    "Font5",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"
];
let strings_f8: string[] = [
    "Font8",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789"
];

for (let size: number = 1; size <= 4; size++) {
    background = image.create(scene.screenWidth(), scene.screenHeight());
    let y: number = 0;
    let f: FontInfo = drawStrings.createFontInfo(FontName.Font5, size);
    drawStrings.writeMultiple(strings_f5, background, 0, 0, size * 2, f);
    f = drawStrings.createFontInfo(FontName.Font8, size);
    drawStrings.writeMultiple(strings_f8, background, 0, 30 * size, size * 2 + 1, f);
    scene.setBackgroundImage(background);
    loops.pause(pauseTime);
}   // for ( size )

for (let size: number = 1; size <= 4; size++) {
    background = image.create(scene.screenWidth(), scene.screenHeight());
    let y: number = 0;
    let f: FontInfo = drawStrings.createFontInfo(FontName.Font5, size);
    drawStrings.writeMultipleCenter(strings_f5, background, 0, size * 2, f);
    f = drawStrings.createFontInfo(FontName.Font8, size);
    drawStrings.writeMultipleCenter(strings_f8, background, 30 * size, size * 2 + 1, f);
    scene.setBackgroundImage(background);
    loops.pause(pauseTime);
}   // for ( size )

