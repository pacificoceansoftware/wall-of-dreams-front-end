import React from "react";
import Home from "./Home";
import { connect, ConnectedProps } from "react-redux";
import * as HomeActions from "../store/router/action";
import { bindActionCreators } from "redux";
import { AppState } from "../store";
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
        </Router>
      </div>
  );
}

export default connector(App);
