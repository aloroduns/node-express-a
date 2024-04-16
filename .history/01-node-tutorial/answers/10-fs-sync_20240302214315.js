const fs = require('fs');
const path = require('path');
const { listeners } = require('process');

//Define path
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');

//Write the 3 line

fs.writeFileSync(filePath, 'Am doing well\n');
fs.appendFileSync(filePath, 'Glory is my name\n');
fs.appendFileSync(filePath, 'Go home and relax\n');

//read the content

const fileContents = fs.readFileSync(filePath, 'utf8');

//log the content to console

console.log('File Contents:');
console.log(fileCont)