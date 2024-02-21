const express = require("express");
const router = express.Router();
const Model = require("../model/model.js");

//Post Method
router.post("/post", async (request, response) => {
  //   response.send("POST API");
  const data = new Model({
    name: request.body.name,
    age: request.body.age,
  });
  try {
    const dataToSave = await data.save();
    response.status(200).json(dataToSave);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

//Get All Method
router.get("/getAll", async (request, response) => {
  //   response.get("Get All API");
  try {
    const data = await Model.find();
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (request, response) => {
  //   response.send("Get by ID API");
  try {
    const data = await Model.findById(request.params.id);
    // console.log(data);
    response.send(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (request, response) => {
  // response.send("Update by ID API");
  try {
    const id = request.params.id;
    const updateData = request.body;
    const option = { new: true };
    const result = await Model.findByIdAndUpdate(id, updateData, option);
    response.send(result);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (request, response) => {
  // response.send("Delete by ID API");
  try {
    const id = request.params.id;
    const data = await Model.findByIdAndDelete(id);
    response.send(`${data.name} Was deleted from Server`);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

module.exports = router;
