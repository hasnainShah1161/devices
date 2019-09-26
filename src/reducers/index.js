import { combineReducers } from "redux";
import getDevices from "./allDevices";
import addDevice from "./addDevice";
import getSingleDevice from "./getSingleDevice";

export default combineReducers({
  getDevices: getDevices,
  addDevice: addDevice,
  getSingleDevice: getSingleDevice
});
