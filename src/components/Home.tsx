import React from "react";
import Ground from "./Ground";
import Asking from "./Asking";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { SetHomeNavigation } from "../store/router/action";
import { AppState } from "../store";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { SIGN_STATE } from "../store/home/type";
import Profile from "./Profile";
import * as HomeAction from "../store/home/action";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      position: "relative",
    },
    joinButton: {
      right: 0,
      zIndex: 1,
      position: "absolute",
      marginRight: 20,
      top: 0,
    },
    joinCard: {
      right: 0,
      zIndex: 1,
      position: "absolute",
      marginRight: 20,
      top: 0,
    },
  }),
);

function mapStateToProps(state: AppState) {
  return {
    userState: state.user,
    homeState: state.home,
  }
}


function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { ...HomeAction, SetHomeNavigation },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Home(props: Props) {
  const classes = useStyles();

  const getJoinState = () => {
    if (props.userState.isJoin) {
      return (
        <Avatar 
        className={classes.joinCard} 
        onClick = {handleClick} >OP</Avatar>
      );
    } else {
      return (
        <Button className={classes.joinButton} variant="contained" color="primary" onClick={handleClick} >
          Join
        </Button>
      );
    }
  }

  const handleClick = (event: any) => {
    props.SetAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    props.SetAnchorElement(null);
  };

  const open = Boolean(props.homeState.anchorEl);

  const getSign = () => {
    if (props.homeState.signState === SIGN_STATE.SIGN_IN) {
      return <SignIn></SignIn>;
    } else if (props.homeState.signState === SIGN_STATE.SIGN_UP) {
      return <SignUp></SignUp>;
    } else if(props.homeState.signState === SIGN_STATE.PROFILE){
      return <Profile></Profile>
    }
    return null;
  }

  return (
    <div className={classes.root}>
      <Ground />
      <Asking></Asking>
      {getJoinState()}
      <Popover
        id={"simple-popover"}
        open={open}
        anchorEl={props.homeState.anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {getSign()}
      </Popover>
    </div>
  );
}

export default connector(Home);
