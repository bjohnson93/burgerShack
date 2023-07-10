import { hotdogs } from "../db/OrderDb.js"
import { BadRequest } from "../utils/Errors.js"

class HotdogsService {

  getHotdogs() {
    return hotdogs
  }
  getHotdogById(hotdogId) {
    const foundHotdog = hotdogs.find(hotdog => hotdog.id == hotdogId)

    if (!foundHotdog) {
      throw new BadRequest(`${hotdogId} is not a valid id!`)
    }

    return foundHotdog

  }
  createHotdog(hotdogData) {
    hotdogData.id = hotdogs.length + 1
    hotdogs.push(hotdogData)
    return hotdogData
  }

  removeHotdog(hotdogId) {
    const foundIndex = hotdogs.findIndex(hotdog => hotdog.id == hotdogId)
    if (foundIndex == -1) {
      throw new BadRequest(`${hotdogId} isn't a valid id!`)
    }

    hotdogs.splice(foundIndex, 1)
  }

  updateHotdog(hotdogId, hotdogData) {
    let originalDog = this.getHotdogById(hotdogId)

    originalDog.bun = hotdogData.bun || originalDog.bun
    originalDog.cheese = hotdogData.cheese || originalDog.cheese
    originalDog.price = hotdogData.price || originalDog.price
    originalDog.condiment = hotdogData.condiment || originalDog.condiment

    return originalDog
  }
}
export const hotdogsService = new HotdogsService()