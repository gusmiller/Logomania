/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/13/2023 7:58:02 PM 
 */

// Include packages needed for this application
const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const acronymn = require('./assets/js/questions.js');
const colors = require('./assets/js/colors.js');

let builder = {
    acronym: "",
    textcolor: "",
    shape: "",
    shapecolor: ""
}

/**
 * Start the Readme questionnaire process; the goal is to achieve sections for Description, Table of Contents,
 * Installation, Usage, License, Contributing, and Tests. This is the start of a chain of events build on promises, 
 * each section will feed a global array of ojects that will be used to creae the Readme document. 
 * We start with the product name.
 */
const init = () => {

    const vgafilename = "./examples/logo.svg";

    // Validate whether file exists or not
    if (fs.existsSync(vgafilename)) {

        fs.unlink(vgafilename, (err) => {
            if (err) {
                console.error(`Error deleting file: ${err}`);
            }
        });
    }

    inquirer.prompt(acronymn.question)
        .then(answers => {
            
            builder.acronym = answers.acronym;
            
        });

};

/**
 * Entry point for the application. File will trigger this when it finishes
 * loading
 */
init();