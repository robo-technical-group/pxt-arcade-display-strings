let strings: string[] = [
    "Font5",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "",
    "Font8",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
];

let fonts: FontName[] = [
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font5,
    FontName.Font8,
    FontName.Font8,
    FontName.Font8,
    FontName.Font8,
];

let pauseTime: number = 2000;

let background: Image = image.create(scene.screenWidth(), scene.screenHeight());
let y: number = 0;
for (let index: number = 0; index < strings.length; index++) {
    let f = displayStrings.font(fonts[index]);
    displayStrings.write(strings[index], background, 0, y, index + 1, f);
    y += f.charHeight + 1;
}   // for ( index )
scene.setBackgroundImage(background);
loops.pause(pauseTime);

background = image.create(scene.screenWidth(), scene.screenHeight());
y = 0;
for (let index: number = 0; index < strings.length; index++) {
    let f = displayStrings.fontDouble(fonts[index]);
    displayStrings.write(strings[index], background, 0, y, index + 1, f);
    y += f.charHeight + 1;
}   // for ( index )
scene.setBackgroundImage(background);
loops.pause(pauseTime);

background = image.create(scene.screenWidth(), scene.screenHeight());
y = 0;
for (let index: number = 0; index < strings.length; index++) {
    let f = displayStrings.fontScaled(fonts[index], 3);
    displayStrings.write(strings[index], background, 0, y, index + 1, f);
    y += f.charHeight + 1;
}   // for ( index )
scene.setBackgroundImage(background);

