import { ACTIONS } from ".."
import { HomeType } from "../../../types"

export const setTrendingMovieAction = (payload : HomeType) => {
    return {
        type: ACTIONS.HOME.SET_TRENDING_MOVIES,
        payload
    }
}

export const clearTrendingMovieAction = () => {
    return {
        type: ACTIONS.HOME.CLEAR_TRENDING_MOVIES,
    }
}
//
