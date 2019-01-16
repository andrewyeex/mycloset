import * as React from 'react';
import {
  IClothing,
  initClothing
} from 'src/App';
import ClothingCard from '../clothingCard/clothingCard';


interface IProps {
  id: number;
  shoes: IClothing;
  bottom: IClothing;
  top: IClothing[];
  headwear: IClothing;
}

class DisplayOutfit extends React.PureComponent<IProps, {}>{
  public render(){
    console.log({ props : this.props })
    const {
      shoes = initClothing,
      bottom = initClothing,
      top = [initClothing],
      headwear = initClothing
    } = this.props
    const headwearCardProps = {
      image:  !!headwear && headwear.image,
      clothing_type: !!headwear && headwear.clothing_type,
      handleCardClick : () => console.log('do something')
    }
    const bottomCardProps = {
      image: !!bottom && bottom.image,
      clothing_type: !!bottom && bottom.clothing_type,
      handleCardClick : () => console.log('do something')
    }
    const shoesCardProps = {
      image: !!shoes && shoes.image,
      clothing_type: !!shoes && shoes.clothing_type,
      handleCardClick : () => console.log('do something')
    }
    return(
      <div className="col-12 display-outfit">
        <div className="row">
          <div className="col-3" >
            <ClothingCard {...headwearCardProps} />
          </div>
          <div className="col-3" >
            { top.map(
              (t : IClothing, i) => {
                const topCardProps = {
                  image: !!t && t.image,
                  clothing_type: !!t && t.clothing_type,
                  handleCardClick : () => console.log('do something'),
                  index: i
                }
                return <ClothingCard key={t.id} {...topCardProps} />
              })
            }
          </div>
          <div className="col-3" >
            <ClothingCard {...bottomCardProps} />
          </div>
          <div className="col-3" >
            <ClothingCard {...shoesCardProps} />
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayOutfit;
