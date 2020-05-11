import * as TYPE from "./type";
import axios from "axios";

export function GetDreamsAction() {
  return function (dispatch: any) {
    dispatch({
      type: TYPE.DREAM_REQUESTED,
    });

    axios
      .get("http://localhost:5000/dream")
      .then(({ data }) => {
        const result = data.map((element: any) => element.dream);
        dispatch({
          type: TYPE.DREAM_RECEIVED,
          dreams: result,
        });
      })
      .catch((error) =>
        dispatch({
          type: TYPE.DREAM_FAILED,
          payload: error,
        })
      );
  };
}

export function SaveDreamAction(dream: string) {
  return function (dispatch: any) {
    dispatch({
      type: TYPE.ADD_DREAM_REQUESTED,
    });

    const newDream = {
      dream: dream,
    };

    axios
      .post("http://localhost:5000/dream/add", newDream)
      .then(() => {
        dispatch({
          type: TYPE.DREAM_ADDED,
          dream: dream,
        });
      })
      .catch((error) =>
        dispatch({
          type: TYPE.ADD_DREAM_FAILED,
          payload: error,
        })
      );
  };
}
