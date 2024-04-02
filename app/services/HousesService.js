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

    async addHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        console.log('new api thingy', response)
        const house = new House(response.data)
        AppState.houses.push(house)
    }

    async removeHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        console.log('response', response)
        const indexRemoved = AppState.houses.findIndex(house => house.id == houseId)
        console.log(AppState.houses[indexRemoved])
        AppState.houses.splice(indexRemoved, 1)
    }


}

export const housesService = new HousesService()