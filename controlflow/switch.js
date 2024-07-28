const month = 3
//shortcut to duplicate a text SHIFT+ALT+DOWN ARROW
//toggle wrap: alt+z
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default");
        break;
}
//if break is not written in between it will print all the values after that in scope except the default value