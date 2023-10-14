/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/14/2023 7:28:21 AM
 */
const chalk = require('chalk');

const shapes = ["circle", "triangle", "square"]

const question = [
    {
        type: "input",
        name: "acronym",
        message: chalk.green("Please enter a 3 letter acronym"),
        validate: function(answer){

            if (answer.length != 3) {
                return chalk.red("Acronum must be 3 characters! Please try again or press CTRL-C to exit CLI")
            } else {
                return true;
            }

        }
        
    }
]


module.exports = { question }