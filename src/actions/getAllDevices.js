import Axios from "axios";
import * as TYPES from "../types/types";

export function getAllDevices() {
  return dispatch => {
    dispatch({
      type: TYPES.GET_DEVICES_REQUEST
    });
    return Axios.get("https://shielded-mesa-95045.herokuapp.com/devices")
      .then(res => {
        console.log("response:", res);
        if (res.status === 200) {
          dispatch({
            type: TYPES.GET_DEVICES_SUCCESS,
            getDevices: res.data
          });
        } else {
          dispatch({
            type: TYPES.GET_DEVICES_FAILURE
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: TYPES.GET_DEVICES_FAILURE });
      });
  };
}
