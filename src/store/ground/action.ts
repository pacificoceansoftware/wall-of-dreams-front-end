import * as TYPE from "./type";
import axios from "axios";

export function GetDreamsAction() {
  return function (dispatch: any) {
    dispatch({
      type: TYPE.DREAM_REQUESTED,
    });
    axios
      .get( process.env.API_URL + "/api/user/dreams")
      .then(({ data }) => {
        const result = data.map((element: any) => element.dreams);
        dispatch({
          type: TYPE.DREAM_RECEIVED,
          payload: result,
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

