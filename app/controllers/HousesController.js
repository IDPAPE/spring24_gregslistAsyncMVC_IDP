import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "../services/AxiosService.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
    constructor() {
        console.log('houses controller loaded')
        this.getHouses()
        AppState.on('houses', this.drawHouses)
        AppState.on('account', this.drawHouses)
    }

    async getHouses() {
        await housesService.getHouses()
    }
    drawHouses() {
        let houseCards = ''
        AppState.houses.forEach(house => houseCards += house.HouseCard)
        setHTML('houses-cards', houseCards)
    }

    async addHouse() {
        event.preventDefault()
        console.log('making a new listing for house');
        const form = event.target
        const houseData = getFormData(form)
        console.log(houseData);
        await housesService.addHouse(houseData)
    }

    async removeHouse(houseId) {
        const confirmation = await Pop.confirm('would you like to delete this house?')
        if (confirmation == false) {
            return
        }
        else {
            housesService.removeHouse(houseId)
        }
    }
}