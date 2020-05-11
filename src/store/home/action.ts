import * as TYPE from "./type";
export function SetHomeNavigation(homeNavigation: TYPE.HOME_NAVIGATION): TYPE.ACTION_TYPE {
    return {
        type: TYPE.SET_HOME_NAVIGATION,
        navigation: homeNavigation,
    }
}