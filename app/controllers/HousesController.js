import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
    constructor() {
        console.log('houses controller loaded')
        this.getHouses()
        AppState.on('houses', this.drawHouses)
    }

    async getHouses() {
        await housesService.getHouses()
    }
    drawHouses() {
        let houseCards = ''
        AppState.houses.forEach(house => houseCards += house.HouseCard)
        setHTML('houses-cards', houseCards)
    }
}