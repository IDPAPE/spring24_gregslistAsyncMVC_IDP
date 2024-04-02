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
        this.createdAt = new Date(this.createdAt)
        this.updatedAt = new Date(this.updatedAt)
    }

    get HouseCard() {
        return `
        
        <div class="col-md-4 col-12">
            <div class="card text-start my-3">
                <img class="card-img-top" src="${this.imgUrl}" alt="House Image Broken 😢" />
                <div class="card-body">
                    <h4 class="card-title">$${this.price}</h4>
                    <p class="card-text">${this.bedrooms} bed | ${this.bathrooms} bath | ${this.levels} floors</p>
                    <p>${this.description}</p>
                    <p>built: ${this.year} | Listed: ${this.createdAt.toDateString()}</p>
                    
                </div>
            </div>
        </div>
        `
    }
}