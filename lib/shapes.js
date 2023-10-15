/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/15/2023 8:18:51 AM
 */

/**
 * Shapes text content - this class will be extended in all shape classes. It extends functionality using their 
 * prototype 
 */
class TextContent {
    constructor(text, color) {
        this.text = text;
        this.color = color;
        this.ypos = 125;
        this.xpos = 150;
        this.fontsize = 60;
    }
}

// Add functionality to TextContent class. hat prototype object has a prototype of its own, and so on until an object is 
// reached with null as its prototype. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
TextContent.prototype.node = function () {
    return `<text x=\"${this.xpos}\" y=\"${this.ypos}\" font-size=\"60\" text-anchor=\"middle\" fill=\"${this.color}\">${this.text}</text>`
}

// Changes Y position of the text. Images may have different sizes and text may not align to the middle
TextContent.prototype.yposition = function (value) {
    this.ypos = value;
}

// Changes X position of the text. Images may have different sizes and text may not align to the middle
TextContent.prototype.xposition = function (value) {
    this.xpos = value;
}

TextContent.prototype.fontsize = function (value) {
    this.fontsize = value;
}

/********************************************************************************************************************
 * Shape classes - defined after otherwise is not going to inherit from the text content class. This is very important
 * as Javascript read ALL file and applies logic on watherfall style.
 ********************************************************************************************************************/

class SquareShape extends textshape {
    constructor(shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }
}

class TriangleShape extends TextContent {
    constructor(shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }
}

class CircleShape extends TextContent {
    constructor(shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }
}

module.exports = { SquareShape, CircleShape, TriangleShape, TextContent };