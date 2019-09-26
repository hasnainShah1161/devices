import React from "react";
import IndexComponent from "../../components/index/IndexComponent";
import { connect } from "react-redux";
import { getAllDevices } from "../../actions/getAllDevices";

class Index extends React.Component {
  state = {
    showModal: false
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.props.getAllDevices();
  }

  render() {
    const { allDevices, isLoading } = this.props;
    return (
      <IndexComponent
        allDevices={allDevices && allDevices}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  allDevices: state.getDevices.getDevices,
  isLoading: state.getDevices.isLoading
});
const mapDispatchToProps = dispatch => ({
  getAllDevices: () => dispatch(getAllDevices())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
