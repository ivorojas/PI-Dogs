const { API_KEY } = process.env;
const axios = require("axios");
const e = require("express");
//require("dotenv").config();

const { Temperament } = require("../db.js");

const getApiTemperaments = async () => {
  try {
    let apiTemperaments = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    let temperaments = apiTemperaments.data
      .map((e) => e.temperament)
      .join()
      .replaceAll(" ", "") // reemplaza espacios vacios de mas entre los elementos
      .split(",");

    temperaments = temperaments
      // esto quita los strings vacios que quedan  .filter((t) => t !== "")
      .sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    let set = new Set(temperaments);
    // lo vuelvo a hacer array, porque aunque se pueda iterar, en el insomnia no figura
    temperaments = Array.from(set);
    //console.log(temperaments);
    temperaments.forEach((t) => {
      //compruebo que no haya strings vacios con este if
      if (t.length > 0) {
        Temperament.findOrCreate({
          where: { name: t },
        });
      }
    });

    const allTemperaments = await Temperament.findAll();
    return allTemperaments;
  } catch (error) {
    console.log("Error en getApiTemperaments");
  }
};

const getTemperaments = async (req, res) => {
  try {
    let temperaments = await getApiTemperaments();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getTemperaments,
};
