import * as React from 'react';
import HamburgerIcon from '../../component/hamburgerIcon/hamburgerIcon';
import HamburgerPage from '../../component/hamburgerPage/hamburgerPage';
// import Menu from '../../component/menu/menu';
import Title from '../../component/title/title';
import UserSettingIcon from '../../component/userSettingIcon/userSettingIcon';
import UserSettingPage from '../../component/userSettingPage/userSettingPage';
import './main.css';

// const CLOTHES_TYPES = [
//   "SHOES",
//   "PANTS",
//   "SHIRTS",
//   "POLOS",
//   "T-SHIRTS",
//   "JACKETS",
//   "SWEATERS",
//   "HOODIES",
//   "SHORTS",
//   "HEADWEAR"
// ]

interface Props {
  name?: string;
}

interface State {
  isHamburgerOpen       : boolean;
  isUserSettingPageOpen : boolean;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: object){
    super(props)
    this.state = {
      isHamburgerOpen       : false,
      isUserSettingPageOpen : false
    }
  }

  public render(){

    const {
      isHamburgerOpen,
      isUserSettingPageOpen
    } = this.state

    return(
      <div id="main" className="container-fluid">
        {/* DIV WITH 3 COMPONENTS -> HAMBURGER, TITTLE, USER */}
        <div className="row topBar">
          <div className="col-2">{isHamburgerOpen ? <HamburgerPage /> : <HamburgerIcon />}</div>
          <div className="col-8 title"><Title /></div>
          <div className="col-2 userIcon">{isUserSettingPageOpen ? <UserSettingPage /> : <UserSettingIcon />}</div>
        </div>
        {/* DIV WITH 3 COMPONENTS -> FAVORITE BUTTON, MENU, SORT_BY */}
        <div className="row menu">
          <div className="col-1  col-sm-2 ">FAVORITE</div>
          <div className="col-10 col-sm-8 title">MENU</div>
          <div className="col-1  col-sm-2 text-right">SORT_BY</div>
        </div>
        {/* CONTENT COMPONENT */}
        <div className="row main-content">
          <div className="card-container"><h1>TEST</h1></div>
        </div>
      </div>
    )
  }
}
