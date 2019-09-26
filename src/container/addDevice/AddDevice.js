import React, { Component } from "react";
import { connect } from "react-redux";
import { addDevices } from "../../actions/addDevice";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    margin: "auto",
    position: "absolute",
    top: "30%",
    left: "28%",
    transform: "translate(-11%,-20%)"
  },
  span: {
    color: "red",
    marginTop: "10px"
  }
});
class AddDevice extends Component {
  state = {
    deviceName: "",
    cost: "",
    expiryDate: "",
    warranty: "",
    image: "",
    deviceNameError: "",
    costError: "",
    expiryDateError: "",
    warrantyError: "",
    imageError: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // when submit
  onSubmit = e => {
    e.preventDefault();
    const { deviceName, cost, warranty, expiryDate, image } = this.state;

    if (deviceName === "") {
      var deviceNameerror = "This Field is required";
    }
    if (cost === "") {
      var costerror = "This Field is required";
    }
    if (warranty === "") {
      var warrantyerror = "This Field is required";
    }
    if (expiryDate === "") {
      var expiryDateerror = "This Field is required";
    }
    if (image === "") {
      var imageerror = "This Field is required";
    } else {
      const addDevice = {
        name: deviceName,
        cost: cost,
        warranty: warranty,
        expiryDate: expiryDate,
        image: image
      };
      this.props.addDevice(addDevice);
      this.props.history.push("/index");
    }
    this.setState({
      deviceNameError: deviceNameerror,
      costError: costerror,
      imageError: imageerror,
      expiryDateError: expiryDateerror,
      warrantyError: warrantyerror
    });
  };

  // onimage select
  onImageSelect = e => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      //   console.log("RESULT", reader.result);
      this.setState({
        image: reader.result
      });
    };
    reader.readAsDataURL(file);
  };
  render() {
    const {
      deviceName,
      cost,
      image,
      expiryDate,
      warranty,

      deviceNameError,
      costError,
      warrantyError,
      expiryDateError,
      imageError
    } = this.state;
    const classes = useStyles();
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          noValidate
          autoComplete="off"
          style={classes.container}
        >
          <TextField
            id="outlined-email-input"
            label="Device Name"
            className={classes.textField}
            type="text"
            name="Device Name"
            autoComplete=""
            margin="normal"
            variant="outlined"
            onChange={this.onChange}
            name="deviceName"
            value={deviceName}
          />
          {deviceNameError && (
            <span style={classes.span}>{deviceNameError}</span>
          )}
          <TextField
            id="outlined-password-input"
            label="Cost"
            className={classes.textField}
            type="number"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={this.onChange}
            name="cost"
            value={cost}
          />
          {costError && <span style={classes.span}>{costError}</span>}
          <TextField
            id="outlined-password-input"
            label="Warranty"
            className={classes.textField}
            type="text"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={this.onChange}
            name="warranty"
            value={warranty}
          />
          {warrantyError && <span style={classes.span}>{warrantyError}</span>}
          <TextField
            id="date"
            label="Expiry Date"
            type="date"
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            name="expiryDate"
            onChange={this.onChange}
            value={expiryDate}
          />
          {expiryDateError && (
            <span style={classes.span}>{expiryDateError}</span>
          )}
          <div className="mt-2">
            <label>Select an Image</label>
            <input
              id="imageLabel"
              className={classes.textField}
              type="file"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={this.onImageSelect}
              //   value={image}
            />
            {imageError && <span style={classes.span}>{imageError}</span>}
          </div>
          <Button type="sumbit" className="mt-3">
            Add Device
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.addDevice.isLoading
});
const mapDispatchToProps = dispatch => ({
  addDevice: newDevice => dispatch(addDevices(newDevice))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDevice);
