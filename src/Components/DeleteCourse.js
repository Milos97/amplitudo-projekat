import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import UseField from "../hooks/useField";
import { fetchCourses, makeCourse } from "../Actions/coursesAction";
import { connect } from "react-redux";
import axios from 'axios';

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
    width: "380px",
    borderBottom: "none",
    paddingTop: "30px",
  },
}))(MuiDialogContent);

const DeleteCourse = ( ) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = useState("");

  function deleteCourse() {
    axios.delete(`/design/` + input, { params: {input: input} });
  }

  return (
    <div>
      <Button
        className="admin-button"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{
            margin: "20px",
            width: "220px",
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
            borderRadius: "0",
            backgroundColor: "red"
        }}
      >
        DELETE COURSE
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p style={{ marginLeft: "8px" }}>Delete existing Course</p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="add-course-div">
              <label for="course_id">Write id of course you want to delete: </label>
              <input className="add-course-input" value={input} type="text" name="course_id" onInput={e => setInput(e.target.value)} />
              <div style={{ marginTop: "30px" }} className="input-parent-div">
                <input
                  className="input-parent-a"
                  type="submit"
                  name="submit"
                  value="Delete Course"
                  className="new-btn new-btn-primary"
                  onClick={() => { deleteCourse(); handleClose();}}
                />
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default connect(null, { makeCourse })(DeleteCourse);
