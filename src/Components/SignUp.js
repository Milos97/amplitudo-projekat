import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: "380px",
    borderBottom: "none",
    paddingTop: "30px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const buttonStyle = withStyles(theme => ({
  root: {
    color: "fff",
    backgroundColor: "#02b3e4",
  },
}))(Button);

export default function SignUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button classes={{
        root: buttonStyle.root,
      }} 
      className="btn-m btn-primary-m"
      color="inherit" 

      style={{
      marginLeft: "8px",
      backgroundColor: "#02b3e4",
      color: "white",
      height: "4rem",
      position: "relative",
      alignItems: "center",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      minWidth: "10rem",
      padding: "0 1.6rem",
      justifyContent: "center",
      userSelect: "none",
      verticalAlign: "bottom",
      color: "#02b3e4",
      fontWeight: "700",
      lineHeight: "1.2",
      letterSpacing: "-.02rem",
      fontSize: "1.4rem",
      width: "fit-content",
    }} 
      onClick={handleClickOpen}>
        Sign up
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p style={{marginLeft: "8px"}}>Sign Up and Start Learning!</p>
        </DialogTitle>
        <DialogContent dividers>
            <Typography gutterBottom>
            <div className="input-parent-div">
                <PersonIcon className="input-ikonica" />
                <input className="form-input" name="fullname" required maxLength="64" minLength="2" placeholder="Full Name" type="text" />
            </div>
            </Typography>
          <Typography gutterBottom>
            <div className="input-parent-div">
                <MailIcon className="input-ikonica" />
                <input className="form-input" name="email" required maxLength="64" minLength="7" placeholder="Email" type="email" />
            </div>
          </Typography>
          <Typography gutterBottom>
            <div className="input-parent-div">
                <LockIcon className="input-ikonica" />
                <input className="form-input" name="password" required maxLength="64" minLength="6" placeholder="Password" type="password" />
            </div>
          </Typography>
          
        </DialogContent>
        <DialogActions>
            <div className="input-parent-div">
                
                <input style={{
                  width: "fit-content",
                  verticalAlign: "top",
                  margin: "5px 5px 0 0",
                }} 
                type="checkbox" name="subscribe_to_mails" />
                <label
                  style={{
                    width: "92%",
                    marginBottom: "14px",
                  }} 
                 for="subscribe_to_mails">
                  Yes! I want to get the most out of YouLearn by receiving emails with exclusive deals, 
                  personal recommendations and learning tips!
                </label>
                <input className="input-parent-a" type="submit" name="submit" value="Sign Up" className="new-btn new-btn-primary" onClick={handleClose}/>
                <p className="signup-p">By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
                <p style={{borderTop:" 1px solid rgba(0, 0, 0, 0.12)", paddingTop:"14px"}}><span>Already have an account ? </span> <a href="#" onClick={handleClose}>Log In</a></p>
            </div>
          {/* <Button autoFocus  color="primary">
            Log In
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}