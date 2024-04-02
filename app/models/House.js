import { AppState } from "../AppState.js"


export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
    }

    get HouseCard() {
        return `
        
        <div class="col-md-4 col-12">
            <div class="card text-start my-3">
                <img class="card-img-top card-img-height" src="${this.imgUrl}" alt="House Image Broken 😢" />
                <div class="card-body">
                    <h4 class="card-title">$${this.price}</h4>
                    <p class="card-text">${this.bedrooms} bed | ${this.bathrooms} bath | ${this.levels} floors</p>
                    <p>${this.description}</p>
                    <p>Built: ${this.year} | Listed: ${this.createdAt.toDateString()}</p>
                    ${this.DeleteButton}
                    
                </div>
            </div>
        </div>
        `
    }
    get DeleteButton() {
        if (this.creatorId == AppState.account?.id) {
            return `
            <button class = "btn btn-rounded btn-danger" onclick="app.HousesController.removeHouse('${this.id}')" ><i class="mdi mdi-delete"></i></button>
            `
        }
        else {
            return ``
        }
    }
}