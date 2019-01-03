import * as React from 'react';
import './hamburgerIcon.css'

interface HamburgerIconProps {
  name?: string;
}
interface HamburgerIconState {
  name?: string;
}

class HamburgerIcon extends React.PureComponent<HamburgerIconProps, HamburgerIconState> {
  private icon = require('../../utilities/open-iconic-master/svg/menu.svg')
  public render() {
    return <img id="hamburgerIcon" src={this.icon} alt="hamburger icon" />;
  }

}

export default HamburgerIcon;
