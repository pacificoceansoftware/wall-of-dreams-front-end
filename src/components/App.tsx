import React from "react";
import SignUp from "./SignUp";
import Home from "./Home";
import { connect, ConnectedProps } from "react-redux";
import * as HomeActions from "../store/router/action";
import { bindActionCreators } from "redux";
import { AppState } from "../store";
import SignIn from "./SignIn";
import {Router, Route } from 'react-router-dom';
import history from '../history';

function mapStateToProps(state: AppState) {
  return {
    homeState: state.router,
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
  return (
      <div>
        <Router history = {history}>
            <Route exact path="/" component={Home} />
            <Route path="/SignUp" component={SignUp} />;
            <Route path="/SignIn" component={SignIn} />;
        </Router>
      </div>
  );
}

export default connector(App);
