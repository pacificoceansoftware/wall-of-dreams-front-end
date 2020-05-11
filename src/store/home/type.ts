export enum HOME_NAVIGATION {
    Home,
    SignUp,
}
export interface homeState {
    navigation: HOME_NAVIGATION,
}

export const SET_HOME_NAVIGATION = "SET_HOME_NAVIGATION";

interface ISetHomeNavigation {
    type: typeof SET_HOME_NAVIGATION,
    navigation: HOME_NAVIGATION,
}

export type ACTION_TYPE = 
| ISetHomeNavigation;
