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
describe('Application Shape (triangle) Unit test', () => {

    describe('triangle', () => {

        it('Should return the SVG html tag for a Triangle shape ', () => {
            const svgnode = "<polygon x=\"10\" y=\"10\" stroke=\"black\" stroke-width=\"2\" fill=\"blue\" points=\"250,60 100,400 400,400\"/>";
            const shape = new shapes.TriangleShape("GUS","red","blue")
            expect(shape.triangle()).toMatch(svgnode);
        });
        
    });
    
    describe('square', () => {

        it('Should return the SVG html tag for a Square shape ', () => {
            const svgnode = "<rect x=\"10\" y=\"10\" width=\"300\" height=\"200\" stroke=\"black\" fill=\"blue\" stroke-width=\"3\"/>"
            const shape = new shapes.SquareShape("GUS","red","blue")
            expect(shape.square()).toMatch(svgnode);
        });
        
    });

    describe('circle', () => {

        it('Should return the SVG html tag for a Circle shape ', () => {
            const svgnode = "<circle cx=\"150\" cy=\"100\" r=\"80\" stroke=\"black\" stroke-width=\"2\" fill=\"blue\"/>"
            const shape = new shapes.CircleShape("GUS","red","blue")
            expect(shape.circle()).toMatch(svgnode);
        });

    });

});