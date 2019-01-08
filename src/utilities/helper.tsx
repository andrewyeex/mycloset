import {
  Clothing
} from '../App'

export const filterByClothingType = (clothings : Clothing[], types : string[]) => {
  return clothings.filter(
    clothing => {
      types.some(
        type => {
          return clothing.clothing_type === type
        }
      )
    }
  )
}
