import React from "react";
// import { RotateSpinner } from "react-spinners-kit";

const Styles = () => ({
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  }
});
const Spinner = props => {
  const classes = Styles();
  return (
    <div>
      {/* <RotateSpinner size={30} color="#686769" loading={props.isLoading} /> */}
      {props.isLoading && <h1 style={classes.spinner}>Loading...</h1>}
    </div>
  );
};

export default Spinner;
