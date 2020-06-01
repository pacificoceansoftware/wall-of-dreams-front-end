import React, { useState } from "react";
import TextFields from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import { AppState } from "../store";
import { SetOpenSign } from "../store/home/action";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import { AddDream } from "../store/ground/action";
import { SaveDreamAction } from "../store/user/action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      top: '40%',
      left: '40%',
    },
    button: {
      background: "border-box",
      height: '53px',
    },
    textField: {
      background: "azure",
    },
    icon: {
      fontSize: '30px !important',
      color: "darkblue",
    }
  }),
);

function mapStateToProps(state: AppState) {
  return {
    userState: state.user,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { SetOpenSign, AddDream, SaveDreamAction },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Asking(props: Props) {
  const classes = useStyles();

  const [dream, setDream] = useState("");

  const submitDreamTextField =  async (event: any) => {
    if (event.key === 'Enter') {
      submitDream();
      setDream("");
    }
  }

  const submitDream = async () => {
    if (props.userState.isJoin) {
      props.SaveDreamAction(props.userState.emailAddress, dream);
    }
    props.AddDream(dream);
    setDream("");
  }

  const changeDream = (event: any) => {
    setDream(event.target.value);
  }

  return (
    <div
      className={classes.root}
    >
      <TextFields
        className={classes.textField}
        id="outlined-basic"
        label="What is your dream?"
        variant="outlined"
        onChange={changeDream}
        onKeyPress={submitDreamTextField}
        value={dream}
      >
      </TextFields>
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={submitDream}
        endIcon={<SendIcon
          className={classes.icon}
        ></SendIcon>}
      >
      </Button>
    </div>
  );
}

export default connector(Asking);
