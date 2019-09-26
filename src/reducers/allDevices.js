import * as TYPES from "../types/types";
const initialState = {
  isLoading: false,
  getDevices: null
};
const getDevices = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_DEVICES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_DEVICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getDevices: actions.getDevices
      };
    case TYPES.GET_DEVICES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
export default getDevices;
