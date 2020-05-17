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

export default function LogIn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="btn-m btn-secondary-m" variant="outlined" color="primary" onClick={handleClickOpen}
        style={{
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
      >
        Log In
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p style={{marginLeft: "8px"}}>Log In to Your YouLearn Account!</p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <form>
              <div className="input-parent-div">
                  <MailIcon className="input-ikonica" />
                  <input className="form-input" name="email" required maxLength="64" minLength="7" placeholder="Email" type="email" />
              </div>
              <div className="input-parent-div">
                  <LockIcon className="input-ikonica" />
                  <input className="form-input" name="password" required maxLength="64" minLength="3" placeholder="Password" type="password" />
              </div>
              <div style={{marginTop: "30px"}} className="input-parent-div">
                <input className="input-parent-a" type="submit" name="submit" value="Log In" className="new-btn new-btn-primary" />
                <p><span>or</span> <a href="#">Forgot Password</a></p>
                <p><span>Dont have an account ? </span> <a href="#" onClick={handleClose}>Sign up</a></p>
              </div>
            </form>
          </Typography>
          <Typography gutterBottom>
            
          </Typography>
        </DialogContent>
        <DialogActions>
            
          {/* <Button autoFocus  color="primary">
            Log In
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}