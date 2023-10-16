/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/15/2023 8:18:51 AM
 */

/**
 * TextObject content - this class will be extended in all shape classes. It extends functionality using their 
 * prototype. NOTE: it is recommended that you place any common functionality and properties shared by the 
 * `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code 
 * in the child classes
 */
class TextObject {
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
TextObject.prototype.textnode = function () {
    return `<text x=\"${this.xpos}\" y=\"${this.ypos}\" font-size=\"60\" text-anchor=\"middle\" fill=\"${this.color}\">${this.text}</text>\n\n`
}

// Changes Y position of the text. Images may have different sizes and text may not align to the middle
TextObject.prototype.yposition = function (value) { this.ypos = value; }

// Changes X position of the text. Images may have different sizes and text may not align to the middle
TextObject.prototype.xposition = function (value) { this.xpos = value; }

// Changes the Fonts size of the text
TextObject.prototype.fontsize = function (value) { this.fontsize = value; }

/********************************************************************************************************************
 * Shape classes - defined after otherwise is not going to inherit from the text content class. This is very important
 * as Javascript read ALL file and applies logic on watherfall style.
 ********************************************************************************************************************/

// Square TextObject class 
class SquareShape extends TextObject {
    constructor(text, color, shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }

    square() {
        return `<rect x=\"10\" y=\"10\" width=\"300\" height=\"200\" stroke=\"black\" fill=\"${this.shapecolor}\" stroke-width=\"3\"/>\n\n`;
    }
}

// Triangle TextObject class 
class TriangleShape extends TextObject {
    constructor(text, color, shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }

    triangle() {
        return `<polygon x=\"10\" y=\"10\" stroke=\"black\" stroke-width=\"2\" fill=\"${this.shapecolor}\" points=\"250,60 100,400 400,400\"/>\n\n`;
    }
}

// Circle TextObject class 
class CircleShape extends TextObject {
    constructor(text, color, shapecolor) {
        super(text, color);
        this.shapecolor = shapecolor;
    }

    circle() {
        return `<circle cx=\"150\" cy=\"100\" r=\"80\" stroke=\"black\" stroke-width=\"2\" fill=\"${this.shapecolor}\"/>\n\n`;
    }
}

module.exports = { SquareShape, CircleShape, TriangleShape };