import Axios from "axios";
import * as TYPES from "../types/types";

export function getSingleDevice(id) {
  return dispatch => {
    dispatch({
      type: TYPES.GET_SINGLE_DEVICES_REQUEST
    });
    return Axios.get(`https://shielded-mesa-95045.herokuapp.com/devices/${id}`)
      .then(res => {
        console.log("response:", res);
        if (res.status === 200) {
          dispatch({
            type: TYPES.GET_SINGLE_DEVICES_SUCCESS,
            getSingleDevice: res.data
          });
        } else {
          dispatch({
            type: TYPES.GET_SINGLE_DEVICES_FAILURE
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: TYPES.GET_SINGLE_DEVICES_FAILURE });
      });
  };
}
