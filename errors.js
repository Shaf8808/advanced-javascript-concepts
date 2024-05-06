const fs = require("fs");

// With a try catch block, you can create custom error handling
// without stopping the whole function
function readFile() {
  let fileData;
  try {
    fileData = fs.readFileSync("things.json");
    console.log(fileData);
  } catch (error) {
    console.log(error.message);
  }
  console.log("Hiiiiiii");
}

readFile();
