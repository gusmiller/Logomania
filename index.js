/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/13/2023 7:58:02 PM 
 */

// Include packages needed for this application
const inquirer = require('inquirer');
const shapes = require('./lib/questions.js');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const questions = require('./assets/js/colors.js');

let builder = {
    acronym: "",
    textcolor: "",
    shape: "",
    shapecolor: "",
    filename: "./examples/logo.svg",
    selectedshape: "",
}

/**
 * Start the Readme questionnaire process; the goal is to achieve sections for Description, Table of Contents,
 * Installation, Usage, License, Contributing, and Tests. This is the start of a chain of events build on promises, 
 * each section will feed a global array of ojects that will be used to creae the Readme document. 
 * We start with the product name.
 */
const init = () => {

    // Validate whether file exists or not
    if (fs.existsSync(builder.filename)) {

        fs.unlink(builder.filename, (err) => {
            if (err) {
                console.error(`Error deleting file: ${err}`);
                return false;
            }
        });
    }

    /**
     * In this asssignment we use nested inquirer questions - last assignemt each one would be on their 
     * own function. In here we start with the logoquestions and if everything comes back ok, the a new
     * prompt is triggered - shapequestions
     */
    inquirer.prompt(questions.logoquestions)
        .then(answers => {

            builder.acronym = answers.acronym;
            builder.textcolor = answers.colorname;

            inquirer.prompt(questions.shapequestions)
                .then((answer) => {

                    builder.shape = answer.shape; // Store shape
                    builder.shapecolor = answer.shapecolor; // Store shape color

                    createShape();
                });

        })
    // .catch((e) => console.log(e.message));
};

/**
 * This option will create the SVG file.
 * @returns 
 */
function createShape() {

    let buildShape = "";
    let buildfilesrting = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n";

    if (builder.shape === "circle") {
        buildShape = new shapes.CircleShape(builder.acronym, builder.textcolor, builder.shapecolor)
        buildfilesrting += buildShape.circle();
        buildfilesrting += buildShape.textnode();

    } else if (builder.shape === "square") {
        buildShape = new shapes.SquareShape(builder.acronym, builder.textcolor, builder.shapecolor)
        buildfilesrting += buildShape.square();
        buildfilesrting += buildShape.textnode();

    } else if (builder.shape === "triangle") {
        buildShape = new shapes.TriangleShape(builder.acronym, builder.textcolor, builder.shapecolor)        
        buildfilesrting += buildShape.triangle();
        buildShape.yposition(310);
        buildShape.xposition(245);
        buildfilesrting += buildShape.textnode();
    }

    buildfilesrting += "</svg>";

    fs.writeFile(builder.filename, buildfilesrting, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

    return true;
}

/**
 * Entry point for the application. Loading process will trigger when it
 * reaches this line.
 */
init();