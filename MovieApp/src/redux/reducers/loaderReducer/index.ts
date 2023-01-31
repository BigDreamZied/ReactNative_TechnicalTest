import { ActionType } from "..";
import { ACTIONS } from "../../actions";
import { RootState } from "../../store";

interface loaderType {
    isShowed: boolean
}

const initialState: loaderType = {
    isShowed: false
}

const loaderReducer = (state = initialState, action: ActionType<loaderType>) => {
    switch (action.type) {
        case ACTIONS.LOADER.SHOW_LOADER:
            return { isShowed: true }
        case ACTIONS.LOADER.HIDE_LOADER:
            return { isShowed: false }
        default:
            return state;
    }
}

export default loaderReducer;

export const loaderSelector = (state:RootState) => state.loader