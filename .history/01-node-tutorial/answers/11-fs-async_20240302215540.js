const fs = require('fs');
const path = require('path');

//file path
const filePath = path.join(__dirname, 'temporary', 'fileB.txt');

//three lines

console.log('at start');
fs.writeFile(filePath, 'Am happy today\n', (err, result) => {
    console.log('at point 1');
    if (err) {
        console.log('This error happened: ', err);
    } else {
        console.log('This error happened: ', err);
    } else {
        fs.writeFile(filePath, 'Rejoicing everyday\n', { flag: 'a'}, (err, result) => {
            console.log('at point 2');
            if (err) {
                console.log('This erro')
            }
        })
    }
})