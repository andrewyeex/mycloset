import * as React from 'react';
import './menu.css'

interface MenuProps {
  clothingTypes               : string[];
  handleClothingTypeSelected  : (id: string) => void;
  handleClearSelected   : () => void;
}
class Menu extends React.PureComponent< MenuProps, {} > {
  public static defaultProps = {
    filters: ["SHOES"]
  }

  public render() {

    const {
      clothingTypes,
      handleClearSelected,
      handleClothingTypeSelected
    } = this.props

    return(
      <div className="filter-pills-container">
        <div>
          {
            clothingTypes.map( (clothingType, i) => {
              const isSelected = this.props[`is${clothingType[0] + clothingType.substr(1).toLocaleLowerCase()}Selected`]
              return(
                <div
                  id={clothingType}
                  key={clothingType}
                  onClick={() => handleClothingTypeSelected(clothingType)}
                  className={`filter-pills ${isSelected ? 'active' : 'inactive'}`} >
                  {clothingType}
                </div>
              )
            })
          }
        </div>
        <div className="filter-helpers" >
          <div id="CLEAR" onClick={handleClearSelected} >CLEAR</div>
        </div>
      </div>
    );
  }

}

export default Menu;