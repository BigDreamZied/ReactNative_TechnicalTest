import { ActionType } from "..";
import { HomeType } from "../../../types";
import { ACTIONS } from "../../actions";
import { RootState } from "../../store";

const initialState: HomeType = {
    page:0,
    results: [],
    total_pages:0,
    total_results:0
}

const homeReducer = (state = initialState, action: ActionType<HomeType>):HomeType => {
    switch (action.type) {
        case ACTIONS.HOME.SET_TRENDING_MOVIES:
            return {...action.payload}
        case ACTIONS.HOME.CLEAR_TRENDING_MOVIES:
            return initialState
        default:
            return state;
    }
}

export default homeReducer;

export const homeSelector = (state:RootState):HomeType => state.home