import * as React from 'react';
import Menu from '../menu/menu';

interface MenuProps {
  filters               : string[];
  handleFilterSelected  : (x: string) => void;
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

interface Clothing {
  id            : number;
  image         : string;
  clothing_type : string;
}

interface Props {
  menuProps                   : MenuProps;
  clothes                     : Clothing[];
  handleOpenAddNewClothesPage : () => void;
}

class DefaultPage extends React.PureComponent< Props , {}  > {
  public renderCards = (clothes: Clothing[]) => {
    return clothes.map(
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
            onClick={this.props.handleOpenAddNewClothesPage}
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
      clothes,
      handleOpenAddNewClothesPage
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
            {this.renderCards(clothes)}
            <div
              className="clothe-card add"
              onClick={handleOpenAddNewClothesPage}>
              <img src={addIcon} alt="Add New Clothes" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DefaultPage;