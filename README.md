# IIFE, XHRs and Callbacks

## Description
Two JSON files. One contains an array of carnivores, and the other of herbivores.
An IIFE with the name of Predator has two private arrays to store carnivores and herbivores.
Predator exposes two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
In the iife-xhr.js file, two functions will be executed after each type of animal is loaded to then display those animals in DOM.
In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.

## How to run
In your terminal run:
```
http-server -p 9999
```
then navigate to http://localhost:9999 in your browser

## Contributors
- [Bin Li](https://github.com/LibE4)

