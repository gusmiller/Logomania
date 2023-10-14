/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/14/2023 7:28:21 AM
 */
const chalk = require('chalk');

const textcolorquestion = [
    {
        type: "input",
        name: "colorname",
        message: chalk.green("Please enter your text color (use color name or hexadecimal representation)"),
        default: "red",
        validate(answer) {
            if (answer.length === 0) {
                return chalk.red("The color you have entered is invalid! you need to provide a color...")
            }
        }
    }
]

const sharecolorquestion = [
    {
        type: "input",
        name: "shapecolor",
        message: chalk.blue("Please enter your shape color (use color name or hexadecimal representation)"),
        validate(answer) {
            if (answer.length === 0) {
                return chalk.red("The color you have entered is invalid! you need to provide a color...")
            }
        }
    }
]

/**
 * This function takes a string parameter to validate whether it is a hexadecimal representation
 * of a color. Example based on https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/
 * @param {string} value 
 * @returns 
 */
function validateHexColor(value) {

    // Regular expression; two groups - [A-Fa-f0-9] any 6/3 letter from A-F upper/lower cases, any number from 0-9.
    const validator = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

    // Validate parameter is valid
    if (value === null || !typeof value === "string") return false;

    // Attempt to retrieve color from dictionary
    let colorSelect = colorsdictionary(value);

    if (colorSelect === null) {

        // Use the test method to validate string
        if (validator.test(value) === true) {
            return true;
        }

    } else {
        return true;
    }

    return false;

}

// There are millions of colors out there but I thought this would give a large range of common colors.
// The colors will be validated against this array of objects.
const colorsdictionary = {
    "black": { hexvalue: "#000000" },
    "silver": { hexvalue: "#c0c0c0" },
    "gray": { hexvalue: "#808080" },
    "white": { hexvalue: "#ffffff" },
    "maroon": { hexvalue: "#800000" },
    "red": { hexvalue: "#ff0000" },
    "purple": { hexvalue: "#800080" },
    "fuchsia": { hexvalue: "#ff00ff" },
    "green": { hexvalue: "#008000" },
    "lime": { hexvalue: "#00ff00" },
    "olive": { hexvalue: "#808000" },
    "yellow": { hexvalue: "#ffff00" },
    "navy": { hexvalue: "#000080" },
    "blue": { hexvalue: "#0000ff" },
    "teal": { hexvalue: "#008080" },
    "aqua": { hexvalue: "#00ffff" },
    "aliceblue": { hexvalue: "#f0f8ff" },
    "antiquewhite": { hexvalue: "#faebd7" },
    "aqua": { hexvalue: "#00ffff" },
    "aquamarine": { hexvalue: "#7fffd4" },
    "azure": { hexvalue: "#f0ffff" },
    "beige": { hexvalue: "#f5f5dc" },
    "bisque": { hexvalue: "#ffe4c4" },
    "black": { hexvalue: "#000000" },
    "blanchedalmond": { hexvalue: "#ffebcd" },
    "blue": { hexvalue: "#0000ff" },
    "blueviolet": { hexvalue: "#8a2be2" },
    "brown": { hexvalue: "#a52a2a" },
    "burlywood": { hexvalue: "#deb887" },
    "cadetblue": { hexvalue: "#5f9ea0" },
    "chartreuse": { hexvalue: "#7fff00" },
    "chocolate": { hexvalue: "#d2691e" },
    "coral": { hexvalue: "#ff7f50" },
    "cornflowerblue": { hexvalue: "#6495ed" },
    "cornsilk": { hexvalue: "#fff8dc" },
    "crimson": { hexvalue: "#dc143c" },
    "cyan": { hexvalue: "#00ffff" },
    "darkblue": { hexvalue: "#00008b" },
    "darkcyan": { hexvalue: "#008b8b" },
    "darkgoldenrod": { hexvalue: "#b8860b" },
    "darkgray": { hexvalue: "#a9a9a9" },
    "darkgreen": { hexvalue: "#006400" },
    "darkgrey": { hexvalue: "#a9a9a9" },
    "darkkhaki": { hexvalue: "#bdb76b" },
    "darkmagenta": { hexvalue: "#8b008b" },
    "darkolivegreen": { hexvalue: "#556b2f" },
    "darkorange": { hexvalue: "#ff8c00" },
    "darkorchid": { hexvalue: "#9932cc" },
    "darkred": { hexvalue: "#8b0000" },
    "darksalmon": { hexvalue: "#e9967a" },
    "darkseagreen": { hexvalue: "#8fbc8f" },
    "darkslateblue": { hexvalue: "#483d8b" },
    "darkslategray": { hexvalue: "#2f4f4f" },
    "darkslategrey": { hexvalue: "#2f4f4f" },
    "darkturquoise": { hexvalue: "#00ced1" },
    "darkviolet": { hexvalue: "#9400d3" },
    "deeppink": { hexvalue: "#ff1493" },
    "deepskyblue": { hexvalue: "#00bfff" },
    "dimgray": { hexvalue: "#696969" },
    "dimgrey": { hexvalue: "#696969" },
    "dodgerblue": { hexvalue: "#1e90ff" },
    "firebrick": { hexvalue: "#b22222" },
    "floralwhite": { hexvalue: "#fffaf0" },
    "forestgreen": { hexvalue: "#228b22" },
    "fuchsia": { hexvalue: "#ff00ff" },
    "gainsboro": { hexvalue: "#dcdcdc" },
    "ghostwhite": { hexvalue: "#f8f8ff" },
    "gold": { hexvalue: "#ffd700" },
    "goldenrod": { hexvalue: "#daa520" },
    "gray": { hexvalue: "#808080" },
    "green": { hexvalue: "#008000" },
    "greenyellow": { hexvalue: "#adff2f" },
    "grey": { hexvalue: "#808080" },
    "honeydew": { hexvalue: "#f0fff0" },
    "hotpink": { hexvalue: "#ff69b4" },
    "indianred": { hexvalue: "#cd5c5c" },
    "indigo": { hexvalue: "#4b0082" },
    "ivory": { hexvalue: "#fffff0" },
    "khaki": { hexvalue: "#f0e68c" },
    "lavender": { hexvalue: "#e6e6fa" },
    "lavenderblush": { hexvalue: "#fff0f5" },
    "lawngreen": { hexvalue: "#7cfc00" },
    "lemonchiffon": { hexvalue: "#fffacd" },
    "lightblue": { hexvalue: "#add8e6" },
    "lightcoral": { hexvalue: "#f08080" },
    "lightcyan": { hexvalue: "#e0ffff" },
    "lightgoldenrodyellow": { hexvalue: "#fafad2" },
    "lightgray": { hexvalue: "#d3d3d3" },
    "lightgreen": { hexvalue: "#90ee90" },
    "lightgrey": { hexvalue: "#d3d3d3" },
    "lightpink": { hexvalue: "#ffb6c1" },
    "lightsalmon": { hexvalue: "#ffa07a" },
    "lightseagreen": { hexvalue: "#20b2aa" },
    "lightskyblue": { hexvalue: "#87cefa" },
    "lightslategray": { hexvalue: "#778899" },
    "lightslategrey": { hexvalue: "#778899" },
    "lightsteelblue": { hexvalue: "#b0c4de" },
    "lightyellow": { hexvalue: "#ffffe0" },
    "lime": { hexvalue: "#00ff00" },
    "limegreen": { hexvalue: "#32cd32" },
    "linen": { hexvalue: "#faf0e6" },
    "magenta": { hexvalue: "#ff00ff" },
    "maroon": { hexvalue: "#800000" },
    "mediumaquamarine": { hexvalue: "#66cdaa" },
    "mediumblue": { hexvalue: "#0000cd" },
    "mediumorchid": { hexvalue: "#ba55d3" },
    "mediumpurple": { hexvalue: "#9370db" },
    "mediumseagreen": { hexvalue: "#3cb371" },
    "mediumslateblue": { hexvalue: "#7b68ee" },
    "mediumspringgreen": { hexvalue: "#00fa9a" },
    "mediumturquoise": { hexvalue: "#48d1cc" },
    "mediumvioletred": { hexvalue: "#c71585" },
    "midnightblue": { hexvalue: "#191970" },
    "mintcream": { hexvalue: "#f5fffa" },
    "mistyrose": { hexvalue: "#ffe4e1" },
    "moccasin": { hexvalue: "#ffe4b5" },
    "navajowhite": { hexvalue: "#ffdead" },
    "navy": { hexvalue: "#000080" },
    "oldlace": { hexvalue: "#fdf5e6" },
    "olive": { hexvalue: "#808000" },
    "olivedrab": { hexvalue: "#6b8e23" },
    "orange": { hexvalue: "#ffa500" },
    "orangered": { hexvalue: "#ff4500" },
    "orchid": { hexvalue: "#da70d6" },
    "palegoldenrod": { hexvalue: "#eee8aa" },
    "palegreen": { hexvalue: "#98fb98" },
    "paleturquoise": { hexvalue: "#afeeee" },
    "palevioletred": { hexvalue: "#db7093" },
    "papayawhip": { hexvalue: "#ffefd5" },
    "peachpuff": { hexvalue: "#ffdab9" },
    "peru": { hexvalue: "#cd853f" },
    "pink": { hexvalue: "#ffc0cb" },
    "plum": { hexvalue: "#dda0dd" },
    "powderblue": { hexvalue: "#b0e0e6" },
    "purple": { hexvalue: "#800080" },
    "rebeccapurple": { hexvalue: "#663399" },
    "red": { hexvalue: "#ff0000" },
    "rosybrown": { hexvalue: "#bc8f8f" },
    "royalblue": { hexvalue: "#4169e1" },
    "saddlebrown": { hexvalue: "#8b4513" },
    "salmon": { hexvalue: "#fa8072" },
    "sandybrown": { hexvalue: "#f4a460" },
    "seagreen": { hexvalue: "#2e8b57" },
    "seashell": { hexvalue: "#fff5ee" },
    "sienna": { hexvalue: "#a0522d" },
    "silver": { hexvalue: "#c0c0c0" },
    "skyblue": { hexvalue: "#87ceeb" },
    "slateblue": { hexvalue: "#6a5acd" },
    "slategray": { hexvalue: "#708090" },
    "slategrey": { hexvalue: "#708090" },
    "snow": { hexvalue: "#fffafa" },
    "springgreen": { hexvalue: "#00ff7f" },
    "steelblue": { hexvalue: "#4682b4" },
    "tan": { hexvalue: "#d2b48c" },
    "teal": { hexvalue: "#008080" },
    "thistle": { hexvalue: "#d8bfd8" },
    "tomato": { hexvalue: "#ff6347" },
    "turquoise": { hexvalue: "#40e0d0" },
    "violet": { hexvalue: "#ee82ee" },
    "wheat": { hexvalue: "#f5deb3" },
    "white": { hexvalue: "#ffffff" },
    "whitesmoke": { hexvalue: "#f5f5f5" },
    "yellow": { hexvalue: "#ffff00" },
    "yellowgreen": { hexvalue: "#9acd32" }
}

module.exports = { textcolorquestion, colorsdictionary, sharecolorquestion, validateHexColor }