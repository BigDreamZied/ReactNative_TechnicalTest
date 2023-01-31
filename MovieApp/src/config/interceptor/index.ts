// Not Really an Interceptor but the concept for Project Structure :)
import {API_URL} from 'react-native-dotenv'
import Axios from "axios";

export const Interceptor = Axios.create({
    baseURL: API_URL,
    timeout: 10000,
})

