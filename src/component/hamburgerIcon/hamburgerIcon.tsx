import * as React from 'react';
import './hamburgerIcon.css'

interface HamburgerIconProps {
  name?: string;
}
interface HamburgerIconState {
  name?: string;
}

class HamburgerIcon extends React.PureComponent<HamburgerIconProps, HamburgerIconState> {

  public render() {
    const icon = require('../../utilities/open-iconic-master/svg/menu.svg')
    return <img id="hamburgerIcon" src={icon} alt="hamburger icon" />;
  }

}

export default HamburgerIcon;
