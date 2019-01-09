import {
  Clothing
} from '../App'

export const filterByClothingType = (clothings : Clothing[], types : string[]) => {
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

export const getImageArr = (clothings : Clothing[]) => !!clothings.length ? clothings.map(clothing => clothing.image) : []
