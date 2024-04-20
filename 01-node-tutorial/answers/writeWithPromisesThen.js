const { writeFile, readFile } = require("fs").promises;
const content = `Line 1\nLine 2\nLine 3\n`;

writeFile('temp.txt', content)
    .then(() => console.log("Wrote Line 1"))// print after line1 is written
    .then(() => writeFile('temp.txt', content, { flag: 'a'}))//append line 2 & 3
        .then(() => console.log("Wrote Lines 2 & 3")) // Log after append
    .then(() => readFile('temp.txt', 'utf-8'))
        .then(readContent => {
            console.log("Read content from temp.txt:\n", readContent);
        })
        .then(() => { //conclusion message
            console.log("All operations completed successfully!");
        })
        .catch(error => {
            console.error("An error occured:", error);
        });