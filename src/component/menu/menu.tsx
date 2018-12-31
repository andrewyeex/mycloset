import * as React from 'react';
import './menu.css'

interface MenuProps {
  filters               : string[];
  handleFilterSelected  : (id: string) => void;
  handleClearSelected   : () => void;
}

interface MenuState {
  name?: string;
}

class Menu extends React.PureComponent< MenuProps, MenuState > {
  public static defaultProps = {
    filters: ["SHOES"]
  }

  public render() {
    const { filters } = this.props
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
                  onClick={() => this.props.handleFilterSelected(filter)}
                  className={`filter-pills ${isSelected ? 'active' : 'inactive'}`} >
                  {filter}
                </div>
              )
            })
          }
        </div>
        <div className="filter-helpers" >
          <div id="CLEAR" onClick={this.props.handleClearSelected} >CLEAR</div>
        </div>
      </div>
    );
  }

}

export default Menu;