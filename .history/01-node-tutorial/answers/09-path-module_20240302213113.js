//Load the built-in path 

const path = require("path");

//Define sequence
const sequence = ["Users", "JohnSmith", "node-express-course", "01-node-tutorial", "answers"];

const joinedPath = path.join(...sequence);

console.log("Joined Path:")