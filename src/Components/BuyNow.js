import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { fetchCourses, makeCourse, fetchCourse } from "../Actions/coursesAction";
import { connect } from "react-redux";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: "none",
    paddingTop: "30px",
  },
}))(MuiDialogContent);

const BuyNow = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = useState("");

  return (
    <div>
      <Button
        className="admin-button"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{
          width: "100%",
          color: "#fff",
          backgroundColor: "#02b3e4",
          border: "2px solid transparent",
          boxShadow: "8px 10px 20px 0 rgba(46, 61, 73, 0.15)",
          display: "inline-block",
          height: "48px",
          padding: "0 8px",
          fontSize: "13px",
          lineHeight: "42px",
          letterSpacing: "2px",
          transition: "all .3s ease",
          borderRadius: "0"
        }}
      >
        BUY NOW
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p style={{ marginLeft: "8px" }}>Need you to fill up the fields: </p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="buy-now-div">

            </div>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuyNow;
