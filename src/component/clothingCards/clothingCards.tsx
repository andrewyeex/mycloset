import * as React from 'react';
import { Clothing } from '../../container/main/main'

interface Props {
  clothings: Clothing[],
  handleClothingSelected: (clothing: Clothing) => void;
}

class ClothingCards extends React.PureComponent< Props, {} > {
  public render = () => this.props.clothings.map((clothing:Clothing) => this.renderCards(clothing))
  private renderCards = (clothing: Clothing) => {
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