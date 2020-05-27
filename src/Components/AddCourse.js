import React from "react";
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

const AddCourse = ( props ) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [title, changeTitle] = UseField("");
  const [img, changeImg] = UseField("");
  const [desc, changeDesc] = UseField("");
  const [author, changeAuthor] = UseField("");
  // const [rating, changeRating] = UseField("");
  // const [reviewsCount, changeReviewsCount] = UseField("");
  const rating = "4.3";
  const reviewsCount = "10,321";
  const [price, changePrice] = UseField("");
  const [discount, changeDiscount] = UseField("");
  const [iframeSrc, changeIframeSrc] = UseField("");

  const onSubmitHandler = () => {
    const payload = {
      img: img,
      title: title,
      desc: desc,
      author: author,
      rating: rating,
      reviewsCount: reviewsCount,
      price: price,
      discount: discount,
      iframeSrc: iframeSrc,
    };
    props.makeCourse(payload);
  };

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
            borderRadius: "0"
        }}
      >
        ADD NEW COURSE
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p style={{ marginLeft: "8px" }}>Add your new Course</p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="add-course-div">
              <label for="title">Title: </label>
              <input className="add-course-input" type="text" name="title" onChange={changeTitle}/>
              <label for="img">Image link: </label>
              <input className="add-course-input" type="text" name="img" onChange={changeImg} />
              <label for="desc">Description: </label>
              <input className="add-course-input" type="text" name="desc" onChange={changeDesc} />
              <label for="author">Author: </label>
              <input className="add-course-input" type="text" name="author" onChange={changeAuthor} />
              {/* <label for="rating">Rating: </label>
              <input className="add-course-input" type="text" name="rating" onChange={changeRating} />
              <label for="reviewsCount">Reviews Count: </label>
              <input className="add-course-input" type="text" name="reviewsCount" onChange={changeReviewsCount} /> */}
              <label for="price">Price: </label>
              <input className="add-course-input" type="number" name="price" onChange={changePrice} />
              <label for="discount">Discount: </label>
              <input className="add-course-input" type="number" name="discount" onChange={changeDiscount} />
              <label for="iframeSrc">iframeSrc: </label>
              <input className="add-course-input" type="text" name="iframeSrc" onChange={changeIframeSrc} />
              <div style={{ marginTop: "30px" }} className="input-parent-div">
                <input
                  className="input-parent-a"
                  type="submit"
                  name="submit"
                  value="Add New Course"
                  className="new-btn new-btn-primary"
                  onClick={() => { onSubmitHandler(); handleClose();}}
                />
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default connect(null, { makeCourse })(AddCourse);
