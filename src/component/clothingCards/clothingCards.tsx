import * as React from 'react';
import { IClothing } from '../../App'

interface Props {
  clothings: IClothing[],
  handleClothingSelected: (clothing: IClothing) => void;
}

class ClothingCards extends React.PureComponent< Props, {} > {
  public render = () => this.props.clothings.map((clothing:IClothing) => this.renderCards(clothing))
  private renderCards = (clothing: IClothing) => {
    const {
      id,
      image,
      clothing_type
    } = clothing
    return (
      <div
        key={id}
        className="clothe-card"
        onClick={() => this.props.handleClothingSelected(clothing) }
      >
        <img src={`${process.env.PUBLIC_URL}/${clothing_type}/${image}`} alt="Add New Clothes" />
      </div>
    )
  }
}

export default ClothingCards;
