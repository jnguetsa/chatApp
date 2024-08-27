const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CHAT");
    console.log("Connexion etablie avec lla BD");
  } catch (error) {
    console.log(
      "Une erreur est survenu lors de la connexion a la Base de donnée : ",
      error
    );
  }
};

module.exports = conn;
