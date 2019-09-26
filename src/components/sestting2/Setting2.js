import React from "react";

localStorage.setItem("userName", "User Name");
localStorage.setItem("age", "Age");
localStorage.setItem("address", "Address");
class Setting2 extends React.Component {
  state = {
    userName: localStorage.getItem("userName"),
    age: localStorage.getItem("age"),
    address: localStorage.getItem("address")
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { userName, age, address } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="container" style={{ width: "30%" }}>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={userName}
                className="form-control"
                name="userName"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={age}
                className="form-control"
                name="age"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={address}
                className="form-control"
                name="address"
                onChange={this.onChange}
              />
            </div>
            <button className="btn btn-block btn-info mt-3 mb-3" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Setting2;
