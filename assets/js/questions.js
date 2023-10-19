/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/14/2023 7:28:21 AM
 */
const chalk = require('chalk');
const colorsarr = require('./colors.js'); // Import named colors array.

const logosshape = ["circle", "square", "triangle"]

let selectedcolors = {
    text: "",
    shape: ""
}

// Logo questions - prompt user for the acronym and the color of the text. There is a depandency 
// between the questions, first question needs to be answered before user can continue.
const logoquestions = [
    {
        type: "input",
        name: "acronym",
        message: chalk.green("Please enter a 3 letter acronym :"),
        default: "GUS",
        validate: function (answer) {

            if (answer.length != 3) {
                return chalk.red("Acronum must be 3 characters! Please try again or press CTRL-C to exit CLI")
            } else {
                return true;
            }

        }
    },
    {
        type: "input",
        name: "colorname",
        message: chalk.green("Please enter your text color (use color name or hexadecimal representation)"),
        default: "red",
        when(answer) {
            return answer.acronym != null;
        },
        validate: (colorname) => {
            if (validateHexColor(colorname) === true) {
                selectedcolors.text = colorname
                return true;
            } else {
                return chalk.red("The Hexadecimal entry is invalid! Please try again...")
            }
        },
    }
]

// Shape questions objects - prompt user for the shape and color of the logo, this includes whether 
// the information is valid or not. There is a depandency between the questions, first question needs 
// to be answered before user can continue.
const shapequestions = [
    {
        type: "list",
        name: "shape",
        message: chalk.cyan("Please enter the shape of your logo (circle, square or tiangle)"),
        choices: logosshape,
        default: "triangle"
    },
    {
        type: "input",
        name: "shapecolor",
        message: chalk.cyan("Please enter your shape color (use color name or hexadecimal representation)"),
        default: "yellow",
        when(answer) {
            return answer.shape != null;
        },
        validate: (shapecolor) => {

            // Call function that validates whether the color is a name color, a hex color code or an invalid color.
            if (validateHexColor(shapecolor) === true) {

                if (shapecolor === selectedcolors.text) {
                    return chalk.red("The Text and Shape cannot be the same color!")
                }

                selectedcolors.shape = shapecolor

                return true;
            } else {
                return chalk.red("The color Name or Hexadecimal code entry is invalid! Please try again...")
            }
        },
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

    // Attempt to retrieve color from dictionary. If the color is not there then we proceed to validate
    // the Hexcolor code.
    let colorSelect = colorsarr.colorsdictionary[value];

    if ((typeof colorSelect === 'undefined') || colorSelect === null) {

        // Use the regular expressions test method to validate string. The test() method of RegExp instances 
        // executes a search with this regular expression for a match between a regular expression and a 
        // specified string. Returns true if there is a match; false otherwise.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
        if (validator.test(value) === true) {
            return true;
        } else {
            return false;
        }

    } else {
        return true;
    }
}

module.exports = { logoquestions, shapequestions, selectedcolors, validateHexColor }