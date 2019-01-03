import * as React from 'react';
import { Clothing } from '../../container/main/main'
import Menu from '../menu/menu';

interface MenuProps {
  handleClothingTypeSelected  : (x: string) => void;
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

interface Props {
  menuProps                   : MenuProps;
  clothingsArr                : Clothing[];
  handleClothingSelected      : (clothing: Clothing) => void;
  handleOpenAddClothingPage   : () => void;
}

class DefaultPage extends React.PureComponent< Props , {}  > {
  public renderCards = (clothingsArr: Clothing[]) => {
    console.log({ clothingsArr })
    return clothingsArr.map(
      (clothing: Clothing) => {
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
    )
  }

  public render () {
    const addIcon = require('../../utilities/open-iconic-master/svg/plus.svg');

    const {
      menuProps,
      clothingsArr,
      handleOpenAddClothingPage
    } = this.props

    return(
      <React.Fragment>
        <div className="row menu">
          <div className="col-1  col-sm-2 ">_</div>
          <div className="col-10 col-sm-8 title"><Menu {...menuProps} /></div>
          <div className="col-1  col-sm-2 text-right">_</div>
        </div>
        <div className="row main-content">
          <div className="card-container">
            {!!clothingsArr.length && this.renderCards(clothingsArr)}
            <div
              className="clothe-card add"
              onClick={handleOpenAddClothingPage}>
              <img src={addIcon} alt="Add New Clothes" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DefaultPage;