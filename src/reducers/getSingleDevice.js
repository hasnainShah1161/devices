import * as TYPES from "../types/types";
const initialState = {
  isLoading: false,
  singleDevice: null
};
const getSingleDevice = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_SINGLE_DEVICES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_SINGLE_DEVICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleDevice: actions.getSingleDevice
      };
    case TYPES.GET_SINGLE_DEVICES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
export default getSingleDevice;
