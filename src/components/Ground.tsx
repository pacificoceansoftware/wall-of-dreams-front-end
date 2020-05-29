import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppState } from '../store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectedProps } from 'react-redux';
import * as GroundAction from "../store/ground/action";
import { SetHomeNavigation } from "../store/router/action";
import './Ground.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100%",
      height: "95%",
      position: "absolute",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function mapStateToProps(state: AppState) {
  return {
    ground: state.ground,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { ...GroundAction, SetHomeNavigation },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Ground(props: Props) {
  const classes = useStyles();
  function FormRow() {
    let items: React.ReactElement[] = [];
    let dreams = props.ground.dreams;
    dreams.forEach(element => {
      element.forEach(subElement => {
          items.push(
            <Grid item xs={2}
              className="cell"
              direction="column"
            >
              <Paper
                className={classes.paper}>{subElement}</Paper>
            </Grid>
          );
      })
    });

    return (
      <React.Fragment>
        {items}
      </React.Fragment>
    );
  }

  useEffect(() => {
    props.GetDreamsAction();
  }, [])

  return (
    <div className={classes.root}
    >
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default connector(Ground);
