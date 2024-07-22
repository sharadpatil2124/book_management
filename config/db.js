const mongoose = require("mongoose");

async function connectdb() {
  try {
    await mongoose.connect("mongodb+srv://sharad01:sharad01@cluster0.oywl2so.mongodb.net/bookManagement");
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("error in connection", error);
  }
}
module.exports = { connectdb };
