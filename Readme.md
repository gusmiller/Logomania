<a id="readme-top" name="readme-top"></a>

<p align="center"><img src="./assets/images/carleton-u-logo.jpg" height="250"></p>

<p align="center" style="margin-top:25px; margin-bottom:50px;">
	<a><img src="https://img.shields.io/static/v1.svg?label=javascript&message=Language&color=cyan"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=nodejs&message=Server&color=green"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=cyan"/></a>
	<a><img src="https://img.shields.io/static/v1.svg?label=Unit-Testing&message=Jest&color=blue"/></a>
</p>

# Carlton Coding Bootcamp Certification

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Table of Contents</summary>
	<ol>
		<li><a href="#Description">Generator Description</a></li>
		<li><a href="#installation">Installation</a></li>
		<li><a href="#jest">Unit Testing</a></li>
		<li><a href="#license">License</a></li>
		<li><a href="#usage">Application Usage</a></li>
		<li><a href="#contactme">Questions? Contact Me!</a></li>
	</ol>
</details>
<div id="Description" style="margin-top: 25px;">

## Logomania - SVG Maker

The SVG logo creator is part of the curriculum of Carleton Coding Bootcamp. The assigment was designed so that can put into practice the skill we have learned so far, including unit testing with Jest. The application was challenging in the scence that it needed to be a class-driven application, in order to be able to run the test unit.

Based on the internet this is the definition of SVG - "An SVG file is an image saved in the Scalable Vector Graphic format. The vector graphic it contains can be scaled to any size without losing quality. For this reason, digital illustrators often save logos, charts, and other graphics intended to be shown at a variety of sizes as SVG files. The World Wide Web Consortium (W3C) developed the SVG format and released its initial version in 2001." - [Fileinfo.com](https://fileinfo.com/extension/svg)

These are the prompts to create the SVG logo, currently there is only code for <span class="color:blue;">Square, Triangle and Circle</span>

<div style="margin-top: 15px;">
	<img src="./assets/images/svg001.png">
</div>

These are the shapes you can achieve with application
<div style="margin-top: 15px;">
	<img src="./assets/images/svg002.png">
</div>

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div id="installation" style="margin-top: 20px;">

## Installation

Please follow the instructions to install the Logomania CLI application

1. Clone the Logomania repository
	```js
	git clone http://github.com/gusmiller/Logomania
	```
2. Install NPM Packaged. Application uses different dependencies: chalk, email-validator, and inquirer. 
	```js
	npm install
	```
3. Install Jest - Unit testing tool (Jest package is only for developing purposes)
	```js
	npm install --save-dev jest
	```
4. Run CLI application
	```js
	node index.js
	```
The package.json contains various metadata of the entire node application, it consists of key-value pairs in actual JSON format. This file is enough to describe the whole project. The most important nodes in this file are as follow: 

- **Repository**: This consists of the repository on which the package is stored.
- **Scripts**: We can define different scripts which could useful to run the package.
- **Config**: It consists of some configurations about the package.
- **Dependencies**: These are the set of dependencies that are necessary to use the package successfully.

For more information about the package.json please visit [geekforgeeks](https://www.geeksforgeeks.org/what-is-package-json-in-node-js/) website.
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div id="jest" style="margin-top: 20px;">

## Jest Unit-Testing

Jest is a framework for running "Unit Tests," a way for you to test the individual functions and components from your code to ensure future commits don't break something unexpected. 
Testing is very important when working with a team of programmers (or even by yourself) ---any commits pushed to your source control should be automatically built and tested to make sure you don't accidentally break anything. Developing is time-expensive and we do not want to lose our code.

Once you have installed the dependencies you can launch the test as follow:

1. Run Jest on the console.
	```js
	npm run jest
	```
2. Run by calling script. This must be configured in the **package.json** file
	```js
	npm run testpackage
	```
NOTE: Before running the package make sure you have created your tests unit tests. Example: shapes.test.js this will test the shapes.js file, of course the file MUST contain the code require for testing.
</div>

<div id="license" style="margin-top: 25px;">

## License

MIT License

Copyright (c) 2023 Logomania

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<a><img src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=yellow"/></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="usage" style="margin-top: 25px;">

## Application Usage

The application is very simple to use. There are only 4 questions:

<ol>
<li>Please enter a 3 letter acronym (default value = GUS). It MUST be 3 characters!</li>
<li>Please enter your text color (use color name or hexadecimal representation). This can be a named color or a Hex color code. </li>
<li>Please enter the shape of your logo (circle, square or tiangle)</li>
<li>Please enter your shape color (use color name or hexadecimal representation)</li>
</ol>

<div style="margin-top: 15px;">
	<img src="./assets/images/Logomania.gif">
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

<div id="contactme" style="margin-top: 25px;">

## Questions? Contact Me 

The purpose of this Logomania is to help developers create a quick SVG logo file could be used in their projects. Finding a Logo is NOT the greatest priority in our developing cylce but it is something that needs to be considered. The Logomania application can be enhanced and there is space for much growth, and it is waiting for you to use your skills and imagination.

Do not hesitate in contacting me, Gustavo Miller - gustavo.miller@miller-hs.com.

You may find the application at: [https://github.com/gusmiller/Logomania](https://github.com/gusmiller/Logomania)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. Developed by Gustavo Miller