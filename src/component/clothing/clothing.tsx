import * as React from 'react';
import { IClothing } from '../../App';
import ClothingCards from '../clothingCards/clothingCards';
import Menu from '../menu/menu';

interface IMenuProps {
  handleClothingTypeSelected : (x: string) => void;
  clothingTypes         : string[];
  handleClearSelected   : () => void;
  isShoesSelected       : boolean;
  isPantsSelected       : boolean;
  isShirtsSelected      : boolean;
  isPolosSelected       : boolean;
  isTshirtsSelected     : boolean;
  isJacketsSelected     : boolean;
  isSweatersSelected    : boolean;
  isHoodiesSelected     : boolean;
  isShortsSelected      : boolean;
  isHeadwearSelected    : boolean;
}

interface IProps {
  menuProps               : IMenuProps;
  clothingsArr            : IClothing[];
  handleClothingSelected  : (clothing: IClothing) => void;
  handleOpenAddClothing   : () => void;
}

class Clothing extends React.PureComponent< IProps , {}  > {

  private addIcon = require('../../utilities/open-iconic-master/svg/plus.svg');

  public render () {

    const {
      menuProps,
      clothingsArr,
      handleClothingSelected,
      handleOpenAddClothing
    } = this.props

    const clothingCardsProps = {
      clothings : clothingsArr,
      handleClothingSelected
    }

    return(
      <React.Fragment>
        <div className="row menu">
          <div className="col-1  col-sm-2 ">_</div>
          <div className="col-10 col-sm-8 title"><Menu {...menuProps} /></div>
          <div className="col-1  col-sm-2 text-right">_</div>
        </div>
        <div className="row main-content">
          <div className="card-container">
            <div
                className="clothe-card add"
                onClick={handleOpenAddClothing}>
                <img src={this.addIcon} alt="Add New Clothes" />
              </div>
            {!!clothingsArr.length && <ClothingCards {...clothingCardsProps} />}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Clothing;