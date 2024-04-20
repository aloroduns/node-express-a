const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
        //content to write
        const content = `Line 1\nLine 2\nLine 3\n`;

        //Write the content to "temp.txt" using writeFile with await
        await writeFile('temp.txt', content);

        console.log("Successfully wrote content to temp.txt!");
    } catch (error) {
        console.error("Error writing to file:", error);
    }
}

async function reader() {
    try {
        //Read the content from "temp.txt" using readFile with await
        const readContent = await readFile('temp.txt', 'utf-8');
        console.log("Read content from temp.txt:\n", readContent);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

async function readWrite() {
    //Call writer and reader functions with await for sequential execution
    await writer();
    await reader();

    //Call the readWrite function to execute asynchronously 
    readWrite();
}