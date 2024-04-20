const fs = require('fs');
const filepath = '../content/big.txt'; 
const encoding = 'utf8';

function readBigFile(highWaterMark) {
    let counter = 0;
    let accumulatedData = '';
    const readStream = fs.createReadStream(filePath, { encoding, highWaterMark });

    readstream.on('data', (chunk) => {
        counter++;
        accumulatedData += chunk;
        
    });

    readStream.on('end', () => {
        console.log(`Finished reading file. Total chunks Recieived chunk: ${counter}`);
        console.log(`Data: ${accumulatedData.substring(0, 20)}...`); 
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error); 
    });
    }

// Test with different highWaterMark values
readBigFile(100);
readBigFile(500);
readBigFile(1000);