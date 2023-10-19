/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/13/2023 7:58:02 PM 
 */

const shapes = require('./shapes.js');

/**
 * Testing script for the shape triangle
 */
describe('Triangle Shape', () => {

    describe('triangle', () => {

        it('Should return the SVG html tag for a Triangle shape ', () => {
            const svgnode = "<polygon x=\"10\" y=\"10\" stroke=\"black\" stroke-width=\"2\" fill=\"blue\" points=\"250,60 100,400 400,400\"/>";
            const shape = new shapes.TriangleShape("GUS","red","blue")
            expect(shape.triangle()).toMatch(svgnode);
        });
        
    });
    
});