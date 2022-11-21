const { API_KEY } = process.env;
const axios = require("axios");
//require("dotenv").config();

const { Dog, Temperament } = require("../db.js");

const getTemperaments = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getTemperaments,
};
