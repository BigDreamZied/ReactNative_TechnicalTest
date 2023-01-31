import { ACTIONS } from ".."

export const showLoader = () => {
    return {
        type: ACTIONS.LOADER.SHOW_LOADER,
    }
}

export const hideLoader = () => {
    return {
        type: ACTIONS.LOADER.HIDE_LOADER,
    }
}