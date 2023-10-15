/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/15/2023 8:18:51 AM
 */

/**
 * Shapes text content - this class will be extended in all shape classes. It extends functionality using their 
 * prototype. NOTE: it is recommended that you place any common functionality and properties shared by the 
 * `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code 
 * in the child classes
 */
class Shape {
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
Shape.prototype.textnode = function () {
    return `<text x=\"${this.xpos}\" y=\"${this.ypos}\" font-size=\"60\" text-anchor=\"middle\" fill=\"${this.color}\">${this.text}</text>`
}

// Changes Y position of the text. Images may have different sizes and text may not align to the middle
Shape.prototype.yposition = function (value) { this.ypos = value; }

// Changes X position of the text. Images may have different sizes and text may not align to the middle
Shape.prototype.xposition = function (value) { this.xpos = value; }

// Changes the Fonts size of the text
Shape.prototype.fontsize = function (value) { this.fontsize = value; }

/********************************************************************************************************************
 * Shape classes - defined after otherwise is not going to inherit from the text content class. This is very important
 * as Javascript read ALL file and applies logic on watherfall style.
 ********************************************************************************************************************/

// Square Shape class 
class SquareShape extends Shape {
    constructor(shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }
    modeshape(){
        return `<rect x=\"10\" y=\"10\" width=\"510\" height=\"530\" stroke=\"black\" fill=\"${this.shapecolor}\" stroke-width=\"2\"/>`
    }
}

// Triangle Shape class 
class TriangleShape extends Shape {
    constructor(shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }
    modeshape(){
        return `<polygon x=\"10\" y=\"10\" stroke=\"black\" stroke-width=\"2\" fill=\"${this.shapecolor}\" points=\"250,60 100,400 400,400\"/>`
    }
}

// Circle Shape class 
class CircleShape extends Shape {
    constructor(shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }
    modeshape(){
        return `<circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"${this.shapecolor}\" />`
    }
}

module.exports = { SquareShape, CircleShape, TriangleShape, Shape };