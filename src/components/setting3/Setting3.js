import React from "react";

localStorage.setItem("resolution", "Device Name");
localStorage.setItem("screenSize", "screenSize");
localStorage.setItem("battaryTiming", "20 hr");
class Setting3 extends React.Component {
  state = {
    resolution: "Resolution",
    screenSize: "Screen Size",
    battaryTiming: "4 hr"
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { resolution, screenSize, battaryTiming } = this.state;

    localStorage.setItem("resolution", resolution);
    localStorage.setItem("screenSize", screenSize);
    localStorage.setItem("battaryTiming", battaryTiming);

    this.setState({
      resolution: localStorage.getItem("resolution"),
      screenSize: localStorage.getItem("screenSize"),
      screenSize: localStorage.getItem("screenSize"),
      battaryTiming: localStorage.getItem("battaryTiming")
    });
  };
  render() {
    console.log()
    const { resolution, screenSize, battaryTiming } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="container" style={{ width: "30%" }}>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={resolution}
                className="form-control"
                name="resolution"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={screenSize}
                className="form-control"
                name="screenSize"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                //   disabled={isDisable}
                value={battaryTiming}
                className="form-control"
                name="battaryTiming"
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

export default Setting3;
