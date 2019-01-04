import * as React from 'react';
import './hamburgerIcon.css'
class HamburgerIcon extends React.PureComponent< {}, {} > {
  private icon = require('../../utilities/open-iconic-master/svg/menu.svg')
  public render() {
    return <img id="hamburgerIcon" src={this.icon} alt="hamburger icon" />;
  }

}

export default HamburgerIcon;
