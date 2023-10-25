import { api } from "./AxiosService"
import { logger } from "../utils/Logger.js"
import { House } from "../models/House"
import { AppState } from "../AppState"



class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('got houses', res.data)
        const newHouse = res.data.map(pojo => new House(pojo))
        AppState.houses = newHouse
    }

    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        logger.log('created house', res.data)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
    }
}


export const housesService = new HousesService()