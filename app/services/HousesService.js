import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const response = await api.get('https://sandbox.codeworksacademy.com/api/houses')
        console.log('response:', response)
        const houses = response.data.map(house => new House(house))
        console.log('houses', houses)
        AppState.houses = houses
        console.log(AppState.houses)
    }


}

export const housesService = new HousesService()