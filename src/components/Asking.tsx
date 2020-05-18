import React from "react";
import TextFields from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { ConnectedProps, connect } from "react-redux";
import {SaveDreamAction} from "../store/ground/action";


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

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {SaveDreamAction},
    dispatch,
  )
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function Asking(props: Props) {
  const classes = useStyles();

  const submitDream = (event: any) => {
    if (event.key === 'Enter') {
      const dream = event.target.value;
      props.SaveDreamAction(dream);
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
