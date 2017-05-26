#!/usr/bin/env node

// require dependencies
var program = require('commander');

// name the null objects from the web interface
let epWebConsole: any;
let webConsoleOutput: any;

// set the default verbosity to max
let silent = false;
