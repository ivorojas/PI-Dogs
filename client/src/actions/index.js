import axios from "axios";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/dogs", {});
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    } catch (error) {
      console.log("error en el getdogs actions");
    }
  };
};
