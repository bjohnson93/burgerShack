export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.vegetable = data.vegetable
    this.hasBacon = data.hasBacon
    this.condiment = data.condiment
    this.cheese = data.cheese
    this.hasGuac = data.hasGuac
  }
}