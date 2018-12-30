import * as React from 'react';

interface MenuProps {
  name?: string;
  types: [];
}

interface MenuState {
  name?: string;
}

class Menu extends React.PureComponent< MenuProps, MenuState > {
  public static defaultProps = {
    types: ["SHOES"]
  }

  public render() {
    const { types } = this.props
    return(
      <div>{types.map((type, i) => <div key={i}>{type}</div>)}</div>
    );
  }

}

export default Menu;