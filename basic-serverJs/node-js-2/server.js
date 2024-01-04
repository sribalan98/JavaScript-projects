const fs = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "txtFile", "hello.txt");

const fileOS = async (readfile) => {
  try {
    await fs.writeFile(filePath, "Hello world!");
    readFile();
    await fs.appendFile(filePath, " sribalan");
    readFile();
  } catch (err) {
    console.log(err);
  }
};

fileOS();

async function readFile() {
  try {
    const readFile = await fs.readFile(filePath, "utf8");
    return console.log(` readFile  : ${readFile}`);
  } catch (err) {
    console.log(err);
  }
}

console.log(__dirname);
console.log(__filename);
