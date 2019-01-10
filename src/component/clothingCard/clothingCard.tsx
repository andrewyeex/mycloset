import * as React from 'react';
import { IClothing } from 'src/App';

interface Props {
  clothings : IClothing[];
  handleCardClick : (x: object) => void;
  handleClothingSelected? : (x: IClothing) => void;
  image : string;
  clothing_type : string;
}

class ClothingCard extends React.PureComponent< Props, {} > {
  private addIcon = require('../../utilities/open-iconic-master/svg/plus.svg');
  public render(){
    const {
      handleCardClick,
      image,
      clothing_type
    } = this.props
    const imgSrc = (image === 'initial') ? this.addIcon : `${process.env.PUBLIC_URL}/${clothing_type}/${image}`
    return(
      <div
        className="clothe-card"
        onClick={handleCardClick}>
        <img src={imgSrc} alt="clickable image with dynamic actions" />
      </div>
    )
  }
}

export default ClothingCard;
