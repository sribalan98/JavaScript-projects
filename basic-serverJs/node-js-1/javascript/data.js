const fs = require("fs");

function showData(data) {
  const rf = fs.readFileSync(data, "utf8");
  const objrf = JSON.parse(rf);
  return objrf;
}

function findNameWithID() {
  let [data, id] = arguments;
  try {
    const rf = fs.readFileSync(data, "utf8");
    const objrf = JSON.parse(rf);
    const returnData = objrf.find((obj) => obj.id === id);
    if (!returnData) {
      throw new Error("Data not found");
    }
    return returnData;
  } catch (error) {
    return `\nerror.name: ${error.name}\nerror.message: ${error.message}`;
  }
}

module.exports = { showData, findNameWithID };
