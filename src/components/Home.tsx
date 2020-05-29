import React from "react";
import Ground from "./Ground";
import Asking from "./Asking";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { SetHomeNavigation } from "../store/router/action";
import { HOME_NAVIGATION } from "../store/router/type";
import { AppState } from "../store";
import Avatar from "@material-ui/core/Avatar";

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
  }
}


function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { SetHomeNavigation },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Home(props: Props) {
  const classes = useStyles();

  const joinButtonClick = (event: any) => {
    props.SetHomeNavigation(HOME_NAVIGATION.SignIn);
  }

  const getJoinState = () => {
    if (props.userState.isJoin) {
      return (
      <Avatar className={classes.joinCard}>OP</Avatar>
      );
    } else {
      return (
        <Button className={classes.joinButton} variant="contained" color="primary" onClick={joinButtonClick} >
          Join
        </Button>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Ground />
      <Asking></Asking>
      {getJoinState()}
    </div>
  );
}

export default connector(Home);
