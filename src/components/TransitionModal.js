import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "gold",
    border: "2px solid #000",
    boxShadow: "12px 12px 2px 1px red",
    padding: theme.spacing(10, 15, 12),
  },
}));

export default function TransitionsModal({ title, description, open = true }) {
  const classes = useStyles();
  const { setShowTooManyReqError = () => {} } = CryptoState();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setShowTooManyReqError(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{title}</h2>
            <p id="transition-modal-description">{description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
