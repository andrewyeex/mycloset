import {
  IClothing
} from '../App'

export const filterByClothingType = (clothings : IClothing[], types : string[]) => {
  console.log({clothings})
  return clothings.filter(
    clothing => {
      return types.some(
        type => {
          return clothing.clothing_type === type
        }
      )
    }
  )
}

export const getImageArr = (clothings : IClothing[]) => !!clothings.length ? clothings.map(clothing => clothing.image) : []
