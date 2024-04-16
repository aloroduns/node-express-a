const fs = require('fs');
const path = require('path');
const { listeners } = require('process');

//Define path
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');

//Write the 3 line

fs.writeFileSync(filePath, 'Am doing well\n');
fs.a