import React from "react";
import SignUp from "./SignUp";
import Home from "./Home";
import { connect, ConnectedProps } from "react-redux";
import * as HomeActions from "../store/home/action";
import { bindActionCreators } from "redux";
import { AppState } from "../store";
import { HOME_NAVIGATION } from "../store/home/type";

function mapStateToProps(state: AppState) {
  return {
    homeState: state.home,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    HomeActions,
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function App(props: Props) {

  const getNavigation = () => {
    if (props.homeState.navigation === HOME_NAVIGATION.Home) {
      return <Home />;
    } else if (props.homeState.navigation === HOME_NAVIGATION.SignUp) {
      return <SignUp />;
    }
    return null;
  }

  return (
    <div>
      {getNavigation()}
    </div>
  );
}

export default connector(App);
