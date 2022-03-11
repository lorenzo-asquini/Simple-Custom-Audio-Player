# Simple-Custom-Audio-Player
> Simple custom audio player for html. The only things present are the play/pause button, the current time and the audio duration.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Project Status](#project-status)
* [License](#license)


## General Information
- A simple audio player for your website, without many fancy features

## Technologies Used
- Javascript - version ES9
- Html - version 5
- Css - version 2.1

## Usage
In [main.html](main.html):

-Modify the id of the \<div\> element. It is the only thing to change to create different custom players:

`<div class = "audioPlayerBox" id='audioPlayer'>`
  
-Insert the link to the desired audio file in the \<source\> segment: 
  
`<source src="#"/>`

In [script.js](script.js):

-Change the interval of the handler to make it more or less responsive:

`setInterval( function() { handlePlayerStats(parentId);}, 500);`

## Project Status
The project is complete

## License
The source code for the site is licensed under the [MIT license](LICENSE)
