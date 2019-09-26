import * as TYPES from "../types/types";
const initialState = {
  isLoading: false,
  addDevice: null
};
const addDevice = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_ADD_DEVICES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_ADD_DEVICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addDevice: actions.addDevice
      };
    case TYPES.GET_ADD_DEVICES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
export default addDevice;
