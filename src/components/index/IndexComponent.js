import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TransitionsModal from "../modal/Modal";
import { connect } from "react-redux";
import { getSingleDevice } from "../../actions/getSingleDevice";
import Spinner from "../../utils/spinners/spinner";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  image: { height: "50%" }
});

function IndexComponent(props) {
  const [showModal, setShowModal] = useState(false);

  function onDeviceClicked(id) {
    console.log(id);
    setShowModal(true);
    props.getSingleDevice(id);
  }
  function handleClose() {
    setShowModal(false);
  }
  const classes = useStyles();
  let allDevices = null;
  if (!props.isLoading) {
    if (props.allDevices && props.allDevices.length > 0) {
      allDevices = props.allDevices.map(device => {
        return (
          <div
            className="col-lg-4 col-md-4 col-sm-6 mt-5 mb-3"
            key={device._id}
          >
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={device.image}
                  title={device.name}
                  className={classes.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {device.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Cost : {device.cost}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Warranty : {device.warranty}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Expiry Date : {device.expiryDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="large"
                  color="secondary"
                  onClick={() => onDeviceClicked(device._id)}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      });
    }
  }

  return (
    <div className="container" style={{ position: "relative" }}>
      <div className="row w-100 ml-0 mr-0 overflow-hidden">{allDevices}</div>
      <TransitionsModal
        handleOpen={showModal}
        handleClose={handleClose}
        singleDevice={props.singleDevice && props.singleDevice}
      />
      <Spinner isLoading={props.isLoading} />
    </div>
  );
}

const mapStateToProps = state => ({
  singleDevice: state.getSingleDevice.singleDevice
});

const mapDispatchToProps = dispatch => ({
  getSingleDevice: id => dispatch(getSingleDevice(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexComponent);
