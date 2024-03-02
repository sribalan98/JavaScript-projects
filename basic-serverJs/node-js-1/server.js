// import data format [{ id: , name: , age: , city:  }]
const data = "./data/data.json";
const dbScanner = require("./javascript/data.js");

const ShowData = dbScanner.showData(data);
const ShowDatawithID = dbScanner.findNameWithID(data, 1);
console.log(`ShowDatawithID : `, ShowDatawithID);
console.log(`ShowData : `, ShowData);
