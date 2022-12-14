import axios from "axios";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      let json = await axios.get("/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    } catch (error) {
      console.log("error en el getdogs actions");
    }
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    try {
      let json = await axios.get("/temperaments");
      //console.log(json.data);
      return dispatch({
        type: "GET_TEMPERAMENTS",
        payload: json.data,
      });
    } catch (error) {
      console.log("error en el getTemperaments actions");
    }
  };
};

export const getDogByName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/dogs?name=` + name);
      return dispatch({
        type: "GET_NAME_DOG",
        payload: json.data,
      });
    } catch (error) {
      console.log("error en getDogByName");
    }
  };
};

export const postDog = (payload) => {
  return async function (dispatch) {
    try {
      let response = await axios.post("/dogs", payload);
      return response;
    } catch (error) {
      console.log("error en el psotDog");
    }
  };
};

export const filterDogsByTemperaments = (payload) => {
  try {
    //console.log(payload);
    return {
      type: "FILTER_BY_TEMPERAMENTS",
      payload,
    };
  } catch (error) {
    console.log("error en el filterTemperaments actions");
  }
};

export function filterBreeds(payload) {
  try {
    return {
      type: "FILTER_BREEDS",
      payload,
    };
  } catch (error) {
    console.log("error en filter breeds");
  }
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      let json = await axios.get("/dogs/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log("error en el getDetails");
    }
  };
};
