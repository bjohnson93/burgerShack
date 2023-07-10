import { burgers } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  async getBurgers() {
    return burgers
  }
  getBurgerById(burgerId) {
    const foundBurger = burgers.find(burger => burger.id == burgerId)

    if (!foundBurger) {
      throw new BadRequest(`${burgerId} was not a valid id`)
    }
    return foundBurger
  }
  createBurger(burgerData) {
    burgerData.id = burgers.length + 1

    burgers.push(burgerData)

    return burgerData
  }

  removeBurger(burgerId) {
    const foundIndex = burgers.findIndex(burger => burger.id == burgerId)

    if (foundIndex == -1) {
      throw new BadRequest(`${burgerId} was not a valid Id`)
    }

    burgers.splice(foundIndex, 1)
  }

  updateBurger(burgerId, burgerData) {
    let originalBurger = this.getBurgerById(burgerId)

    originalBurger.name = burgerData.name || originalBurger.name

    originalBurger.cheese = burgerData.cheese || originalBurger.cheese

    originalBurger.price = burgerData.price || originalBurger.price

    return originalBurger
  }
}

export const burgersService = new BurgersService()