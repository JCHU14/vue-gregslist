export class House {
    constructor(data) {
        this.year = data.year
        this.price = data.price
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.description = data.description
        this.id = data.id
        this.createdAt = new Date(data.createdAt)
        this.creatorId = data.creatorId
        this.imgUrl = data.imgUrl
        this.levels = data.levels
    }
}