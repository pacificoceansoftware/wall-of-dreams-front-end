import * as TYPE from "./type";
import history from "../../history";

export function SetHomeNavigation(homeNavigation: TYPE.HOME_NAVIGATION): TYPE.ACTION_TYPE {

    history.push(homeNavigation);

    return {
        type: TYPE.SET_HOME_NAVIGATION,
        navigation: homeNavigation,
    }
}