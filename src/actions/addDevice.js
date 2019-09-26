import Axios from "axios";
import * as TYPES from "../types/types";
import { toast } from "react-toastify";

export function addDevices(newDevice) {
  const formData = new FormData();
  return dispatch => {
    dispatch({
      type: TYPES.GET_ADD_DEVICES_REQUEST
    });
    return Axios.post(
      `https://shielded-mesa-95045.herokuapp.com/devices/add-device`,
      newDevice,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => {
        console.log("response:", res);
        if (res.status === 200) {
          dispatch({
            type: TYPES.GET_ADD_DEVICES_SUCCESS,
            addDevice: res.data
          });
          toast.success("Device Added");
        } else {
          dispatch({
            type: TYPES.GET_ADD_DEVICES_FAILURE
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: TYPES.GET_ADD_DEVICES_FAILURE });
        toast.error("Oops! something went wrong");
      });
  };
}
