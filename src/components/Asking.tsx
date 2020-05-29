import React from "react";
import TextFields from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import { AppState } from "../store";
import {SetHomeNavigation} from "../store/router/action";
import { HOME_NAVIGATION } from "../store/router/type";
import {SetDream} from "../store/user/action";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "500px",
      marginTop: "200px",
      position: "relative",
      background: "azure",
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
    {SetHomeNavigation, SetDream},
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Asking(props: Props) {
  const classes = useStyles();

  const submitDream = (event: any) => {
    if (event.key === 'Enter') {
      const dream = event.target.value;
      props.SetDream(dream);
      if(props.userState.isJoin) {
        
      }else {
        props.SetHomeNavigation(HOME_NAVIGATION.SignUp);
      }
      event.target.value = "";
    }
  }

  return (
      <TextFields
        className={classes.root}
        id="outlined-basic"
        label="What is your dream?"
        variant="outlined"
        onKeyPress={submitDream}
      />
  );
}

export default connector(Asking);
