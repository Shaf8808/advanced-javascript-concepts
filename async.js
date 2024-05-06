// Asynchronous means code that executes at the same time as the rest of the code

const { error } = require("console");
const fs = require("fs/promises");

// Then promises can be chained one after another once the previous
// async task has been completed
async function readFile() {
  let fileData;
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }
  console.log(fileData.toString());
  console.log("FIle data parsed!!!");
}

readFile();
