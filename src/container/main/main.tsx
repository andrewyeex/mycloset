import * as React from 'react';
import AddNewClothes from '../../component/addNewClothes/addNewClothes'
import HamburgerIcon from '../../component/hamburgerIcon/hamburgerIcon';
import HamburgerPage from '../../component/hamburgerPage/hamburgerPage';
import Menu from '../../component/menu/menu';
import Title from '../../component/title/title';
import UserSettingIcon from '../../component/userSettingIcon/userSettingIcon';
import UserSettingPage from '../../component/userSettingPage/userSettingPage';
import './main.css';

const CLOTHES_FILTERS = [
  "SHOES",
  "PANTS",
  "SHIRTS",
  "POLOS",
  "TSHIRTS",
  "JACKETS",
  "SWEATERS",
  "HOODIES",
  "SHORTS",
  "HEADWEAR"
]

interface Props {
  name?: string;
}

interface State {
  data                  : [] | never[];
  [x: string]           : boolean | object; // this statement applies the rule that all state properties are booleans ?
  isHamburgerOpen       : boolean;
  isUserSettingPageOpen : boolean;
  isAddNewClothesPageOpen: boolean;
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

interface ClothingObject {
  clothing_type : string;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      isHamburgerOpen       : false,
      isUserSettingPageOpen : false,
      isAddNewClothesPageOpen: true,
      isShoesSelected       : false,
      isPantsSelected       : false,
      isShirtsSelected      : false,
      isPolosSelected       : false,
      isTshirtsSelected     : false,
      isJacketsSelected     : false,
      isSweatersSelected    : false,
      isHoodiesSelected     : false,
      isShortsSelected      : false,
      isHeadwearSelected    : false,
      data                  : []
    }
  }

  public componentDidUpdate = (prevProps: Props, prevState: State) => {
    const {
      isShoesSelected,
      isPantsSelected
    } = this.state
    if((prevState.isShoesSelected !== isShoesSelected) && isShoesSelected){
      fetch('http://localhost:4000/clothings/type/shoes',{
        method: 'GET'
      }).then(response => response.json())
      .then(data => this.setState({ data: data.data }))
    }
    if((prevState.isShoesSelected !== isShoesSelected) && !isShoesSelected){
      const data = (this.state.data).filter( (d:ClothingObject) => d.clothing_type !== 'shoes')
      this.setState({ data })
    }
    if((prevState.isPantsSelected !== isPantsSelected) && isPantsSelected){
      fetch('http://localhost:4000/clothings/type/pants',{
        method: 'GET'
      }).then(response => response.json())
      .then(data => this.setState({ data: data.data }))
    }
    if((prevState.isPantsSelected !== isPantsSelected) && !isPantsSelected){
      const data = (this.state.data).filter( (d:ClothingObject) => d.clothing_type !== 'pants')
      this.setState({ data })
    }
  }

  public handleCloseAddNewClothesPage = () => this.setState({ isAddNewClothesPageOpen: false })
  public handleOpenAddNewClothesPage  = () => this.setState({ isAddNewClothesPageOpen: true  })

  public handleFilterSelected = (filter: string) => {
    const stateString = `is${filter[0] + filter.substr(1).toLocaleLowerCase()}Selected`
    this.setState(prevState =>  ({[stateString]: !prevState[stateString] }));
  }

  public handleClearSelected = () => this.setState({
    isShoesSelected       : false,
    isPantsSelected       : false,
    isShirtsSelected      : false,
    isPolosSelected       : false,
    isTshirtsSelected     : false,
    isJacketsSelected     : false,
    isSweatersSelected    : false,
    isHoodiesSelected     : false,
    isShortsSelected      : false,
    isHeadwearSelected    : false,
    data                  : []
  })

  public render(){

    const {
      isHamburgerOpen,
      isUserSettingPageOpen,
      isAddNewClothesPageOpen,
      isShoesSelected,
      isPantsSelected,
      isShirtsSelected,
      isPolosSelected,
      isTshirtsSelected,
      isJacketsSelected,
      isSweatersSelected,
      isHoodiesSelected,
      isShortsSelected,
      isHeadwearSelected
    } = this.state

    const menuProps = {
      filters               : CLOTHES_FILTERS,
      handleFilterSelected  : this.handleFilterSelected,
      handleClearSelected   : this.handleClearSelected,
      isShoesSelected,
      isPantsSelected,
      isShirtsSelected,
      isPolosSelected,
      isTshirtsSelected,
      isJacketsSelected,
      isSweatersSelected,
      isHoodiesSelected,
      isShortsSelected,
      isHeadwearSelected
    }

    const addNewClothesProps = {
      filters                       : CLOTHES_FILTERS,
      handleCloseAddNewClothesPage  : this.handleCloseAddNewClothesPage
    }

    const showDefaultPage = !(isHamburgerOpen || isUserSettingPageOpen || isAddNewClothesPageOpen)

    const addIcon = require('../../utilities/open-iconic-master/svg/plus.svg')
    return(
      <div id="main" className="container-fluid">
        {/* DIV WITH 3 COMPONENTS -> HAMBURGER, TITTLE, USER */}
        <div className="row top-bar">
          <div className="col-2">{isHamburgerOpen ? <HamburgerPage /> : <HamburgerIcon />}</div>
          <div className="col-8 title"><Title /></div>
          <div className="col-2 user-icon">{isUserSettingPageOpen ? <UserSettingPage /> : <UserSettingIcon />}</div>
        </div>
        { isAddNewClothesPageOpen && <AddNewClothes {...addNewClothesProps} /> }
        { showDefaultPage &&
          <React.Fragment>
            {/* DIV WITH 3 COMPONENTS -> FAVORITE BUTTON, MENU, SORT_BY */}
            <div className="row menu">
              <div className="col-1  col-sm-2 ">_</div>
              <div className="col-10 col-sm-8 title"><Menu {...menuProps} /></div>
              <div className="col-1  col-sm-2 text-right">_</div>
            </div>
            {/* CONTENT COMPONENT */}
            <div className="row main-content">
              <div className="card-container">
                {/* <div className="clothe-card">CLOTHINGS</div> */}
                {(this.state.data).map( clothing => {
                  const {
                    id,
                    image,
                    clothing_type
                  } = clothing
                  return (
                    <div
                      key={id}
                      className="clothe-card"
                      onClick={this.handleOpenAddNewClothesPage}>
                      <img src={`${process.env.PUBLIC_URL}/${clothing_type}/${image}`} alt="Add New Clothes" />
                      <div className="clothe-card-overlay" />
                    </div>
                  )
                })}
                <div
                  className="clothe-card add"
                  onClick={this.handleOpenAddNewClothesPage}>
                  <img src={addIcon} alt="Add New Clothes" />
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    )
  }
}
