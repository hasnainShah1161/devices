import React, { Component } from "react";
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
class Login extends Component {
  state = {
    email: "admin",
    password: "",
    randomPassword: "",
    emailError: "",
    passwordError: ""
  };
  componentDidMount() {
    // getting random password
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var stringLength = 8;
    var randomString = "";
    for (var i = 0; i < stringLength; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomString += chars.substring(rnum, rnum + 1);
    }
    this.setState({ randomPassword: randomString && randomString });
  }
  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  // when submit
  onSubmit = e => {
    e.preventDefault();
    const {
      email,
      password,
      randomPassword,
      emailError,
      passwordError
    } = this.state;

    if (email === "admin" && password === randomPassword) {
      this.props.history.push("/index");
      localStorage.setItem("jwt", randomPassword);
    }
    if (email !== "admin" || email === "") {
      var emailerror = "This Field is required";
    }
    if (password !== "admin") {
      var passworderror = "This Field is required";
    } else {
    }
    this.setState({ emailError: emailerror, passwordError: passworderror });
  };
  render() {
    console.log(
      "random password:",
      this.state.randomPassword && this.state.randomPassword
    );
    const { email, password, emailError, passwordError } = this.state;
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
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={this.onEmailChange}
            value={email}
          />
          {emailError && <span style={classes.span}>{emailError}</span>}
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={this.onPasswordChange}
            password={password}
          />
          {passwordError && <span style={classes.span}>{passwordError}</span>}
          <Button type="sumbit">Login</Button>
        </form>
      </div>
    );
  }
}

export default Login;
