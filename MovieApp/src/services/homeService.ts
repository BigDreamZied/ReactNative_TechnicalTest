import { AxiosResponse } from "axios";
import { APIs, Interceptor } from "../config"
import { HomeType } from "../types";

export class HomeService {

    private static _instance: HomeService;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    getHome() {
        return new Promise<HomeType>((resolve, reject) => {
            Interceptor.get(APIs.home.trendingMoviesPerWeek)
                .then((res:AxiosResponse<HomeType>) => {
                    resolve(res.data)
                })
                .catch(() => {
                    // make it general
                    reject()
                })

        })
    }
}


