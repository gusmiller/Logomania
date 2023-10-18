/**
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #10 - SVG Logo Generator
 * Date : 10/16/2023 8:30:26 PM
 */

const apiurl = "https://colorme.p.rapidapi.com/api/BasicColorsGenerator/yellow"

function retrieveColor() {

    fetch(apiurl, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '82eb53c5f0msh3e139914fe42ebfp189497jsn76ca6ac2e1b4',
            'X-RapidAPI-Host': 'colorme.p.rapidapi.com'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    })
}

module.exports = retrieveColor;