import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = () => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000"
    // boxShadow: theme.shadows[5]
  },
  image: { height: "50%!important" }
});
export default class TransitionsModal extends React.Component {
                   state = {
                     warranty:  "",
                     cost:  "",
                     expiryDate:  "",
                     image: "",
                     name:  ""
                   };
                 static getDerivedStateFromProps(props, state) {
                     if (props.singleDevice !==null) { 
                        return {
                          ...state,
                           warranty:
                             props.singleDevice.warranty &&
                             props.singleDevice.warranty,
                           cost:
                             props.singleDevice.cost && props.singleDevice.cost,
                           expiryDate:
                             props.singleDevice.expiryDate &&
                             props.singleDevice.expiryDate,
                           image:
                             props.singleDevice.image &&
                             props.singleDevice.image,
                           name:
                             props.singleDevice.name && props.singleDevice.name
                         };
                   }
                   return state;
                 }
                 onChange = e => {
                   this.setState({
                     [e.target.name]: e.target.value
                   });
                 };
                 render() {
                   console.log("State:",this.state)
                  
                   const classes = useStyles();
                   const {
                     name,
                     warranty,
                     image,
                     expiryDate,
                     cost
                   } = this.state;
                   return (
                     <div>
                       <Modal
                         aria-labelledby="transition-modal-title"
                         aria-describedby="transition-modal-description"
                         //   className={classes.modal}
                         style={classes.modal}
                         open={this.props.handleOpen}
                         onClose={this.props.handleClose}
                         closeAfterTransition
                         BackdropComponent={Backdrop}
                         BackdropProps={{
                           timeout: 500
                         }}
                       >
                         <Fade in={this.props.handleOpen}>
                           <div style={classes.paper}>
                             <Card className={classes.card}>
                               <CardActionArea>
                                 <CardMedia
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="140"
                                   image={image && image}
                                   title={"Andorid"}
                                   className={classes.image}
                                   style={{height:"50%"}}
                                 />
                                 <CardContent>
                                   <lable>Device Name</lable>
                                   <input
                                     
                                     className="form-control"
                                     onChange={this.onChange}
                                     value={name}
                                     name="name"
                                  />
                                   <lanel>Cost</lanel>
                                   <input
                                     
                                     className="form-control"
                                     onChange={this.onChange}
                                     value={cost}
                                     name="cost"
                                   />
                                     
                                  <label>Warranty</label>
                                   <input
                                     className="form-control"
                                     onChange={this.onChange}
                                     value={warranty}
                                     name="warranty"
                                   />
                                   <label>Expiry Date</label>
                                   <input
                                     className="form-control"
                                     contentEditable={true}
                                     onChange={this.onChange}
                                     value={expiryDate}
                                     name="expiryDate"
                                   />
                                 </CardContent>
                               </CardActionArea>
                               <CardActions>
                                 <Button
                                   size="large"
                                   color="secondary"
                                   //   onClick={() => onDeviceClicked(device._id)}
                                 >
                                   Save
                                 </Button>
                               </CardActions>
                             </Card>
                           </div>
                         </Fade>
                       </Modal>
                     </div>
                   );
                 }
               }
