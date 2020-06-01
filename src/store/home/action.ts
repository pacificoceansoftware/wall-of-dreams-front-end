import * as TYPE from "./type";

export function SetSignState(state: TYPE.SIGN_STATE): TYPE.ACTION_TYPE {
    return {
        type: TYPE.SET_SIGN_STATE,
        payload: state,
    }
}

export function SetOpenSign(isOpen: boolean) {
    return {
        type: TYPE.SET_OPEN_SIGN,
        payload: isOpen,
    }
}

export function SetAnchorElement(anchorEl: HTMLButtonElement | null) {
    return {
        type: TYPE.SET_ANCHOR_ELEMENT,
        payload: anchorEl,
    }
}

