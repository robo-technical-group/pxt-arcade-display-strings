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

for (let size: number = 1; size <= 3; size++) {
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

for (let size: number = 1; size <= 3; size++) {
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
