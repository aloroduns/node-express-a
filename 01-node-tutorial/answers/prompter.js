const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter something below.";
let uppercase = false;
let saveInput = false;
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
    <body>
      <p>${item}</p>
      <form method="POST">
        <input type="text" name="item" placeholder="Enter your input"></input><br>
        <input type="checkbox" id="uppercase" name="uppercase"> Convert to Uppercase<br>
        <input type="checkbox" id="saveInput" name="saveInput"> Save Input for Later<br>
        <button type="submit">Submit</button>
      </form>
    </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // Access submitted item from the form
      if (body["item"]) {
        item = body["item"];
      } else {
        item = "Nothing was entered.";
      }
      // Update uppercase and saveInput based on checkboxes
      if (body["uppercase"]) {
        uppercase = true;
        item = item.toUpperCase();
      } else {
        uppercase = false;
      }
      if (body["saveInput"]) {
        saveInput = true;
        //Implement logic to save the input (e.g., to a file )
      } else {
        saveInput = false;
      }

      // Redirect back to the form after processing
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

server.listen(3000);
console.log("The server is listening on port 3000.");
