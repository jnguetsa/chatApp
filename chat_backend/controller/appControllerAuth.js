const USER = require("../models/modelUser.js");
const login = async (req, res) => {
  console.log("login");
};
const logout = async (req, res) => {
  console.log("logout");
};
const sign = async (req, res) => {
  console.log("sign");
};

const getAll = async (req, res) => {
  try {
    const users = await USER.find({});
    if ((users.length = !0)) {
      return res.status(203).json({ message: "Aucun utilisateur trouver" });
    } else {
      return res.status(200).json({ message: users });
    }
  } catch (error) {
    console.log("Une erreur est survenu: ", error);
    return res
      .status(404)
      .json({ message: "Une erreur s'est produite: " + error.message });
  }
};
module.exports = { login, sign, logout, getAll };
