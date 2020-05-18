import React from "react";
import Ground from "./Ground";
import Asking from "./Asking";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { SetHomeNavigation } from "../store/home/action";
import { HOME_NAVIGATION } from "../store/home/type";

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
    },
  }),
);

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { SetHomeNavigation },
    dispatch,
  )
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Home(props: Props) {
  const classes = useStyles();

  const joinButtonClick = (event: any) => {
    props.SetHomeNavigation(HOME_NAVIGATION.SignUp);
  }

  return (
    <div className={classes.root}>
      <Ground />
      <Asking></Asking>
      <Button className={classes.joinButton} variant="contained" color="primary" onClick = {joinButtonClick} >
        Join
      </Button>
    </div>
  );
}

export default connector(Home);
