import { APIs, Interceptor } from "../config"

export class DetailsService {
    
    private static _instance: DetailsService;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    getMovieDetails(movieID: string | number) {
        //Todo Typing
        return new Promise<any>((resolve, reject) => {
            Interceptor.get(APIs.movieDetails.movieDetails(movieID))
                .then((res) => {
                    resolve(res.data)
                })
                .catch(() => {
                    reject()
                })

        })
    }
}


