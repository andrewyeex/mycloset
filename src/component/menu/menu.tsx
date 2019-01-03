import * as React from 'react';
import './menu.css'

interface MenuProps {
  filters               : string[];
  handleFilterSelected  : (id: string) => void;
  handleClearSelected   : () => void;
}
class Menu extends React.PureComponent< MenuProps, {} > {
  public static defaultProps = {
    filters: ["SHOES"]
  }

  public render() {

    const {
      filters,
      handleClearSelected,
      handleFilterSelected
    } = this.props

    return(
      <div className="filter-pills-container">
        <div>
          {
            filters.map( (filter, i) => {
              const isSelected = this.props[`is${filter[0] + filter.substr(1).toLocaleLowerCase()}Selected`]
              return(
                <div
                  id={filter}
                  key={filter}
                  onClick={() => handleFilterSelected(filter)}
                  className={`filter-pills ${isSelected ? 'active' : 'inactive'}`} >
                  {filter}
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