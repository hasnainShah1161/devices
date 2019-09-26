import React from "react";

localStorage.setItem("deviceName", "Device Name");
localStorage.setItem("modal", "Modal");
localStorage.setItem("cost", "23000");
class Setting1 extends React.Component {
  state = {
    deviceName: localStorage.getItem("deviceName"),
    modal: localStorage.getItem("modal"),
    cost: localStorage.getItem("cost")
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { deviceName, modal, cost } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="container" style={{ width: "30%" }}>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={deviceName}
                className="form-control"
                name="deviceName"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={modal}
                className="form-control"
                name="modal"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={cost}
                className="form-control"
                name="cost"
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

export default Setting1;
