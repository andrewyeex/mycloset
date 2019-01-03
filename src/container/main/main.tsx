import * as React from 'react';
import AddClothing from '../../component/addClothing/addClothing';
import DefaultPage from '../../component/defaultPage/defaultPage';
import EditClothing from '../../component/editClothing/editClothing';
import HamburgerIcon from '../../component/hamburgerIcon/hamburgerIcon';
import HamburgerPage from '../../component/hamburgerPage/hamburgerPage';
import Title from '../../component/title/title';
import UserSettingIcon from '../../component/userSettingIcon/userSettingIcon';
import UserSettingPage from '../../component/userSettingPage/userSettingPage';
import './main.css';

const CLOTHING_TYPES = [
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

const stateArr = [
  {isShoesSelected    : 'shoes'   },
  {isPantsSelected    : 'pants'   },
  {isShirtsSelected   : 'shirts'  },
  {isPolosSelected    : 'polos'   },
  {isTshirtsSelected  : 'tshirts' },
  {isJacketsSelected  : 'jacket'  },
  {isSweatersSelected : 'sweaters'},
  {isHoodiesSelected  : 'hoodies' },
  {isShortsSelected   : 'shorts'  },
  {isHeadwearSelected : 'headwear'}
]

interface Props {
  name?: string;
}

interface Clothing {
  id        : number;
  image     : string;
  clothing_type: string;
}

interface State {
  data                  : Clothing[];
  isHamburgerOpen       : boolean;
  isUserSettingPageOpen : boolean;
  isAddClothingPageOpen : boolean;
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
  isEditClothingPageOpen: boolean;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      isHamburgerOpen       : false,
      isUserSettingPageOpen : false,
      isEditClothingPageOpen: false,
      isAddClothingPageOpen : false,
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
    stateArr.forEach(obj => {
      const key = Object.keys(obj).pop()
      const val = !!key && obj[key]
      if(
        !!key &&
        !!val &&
        (prevState[key] !== this.state[key])
      ){
        !!this.state[key] ? this.getClothing(val) : this.clothingTypeData(val)
      }
    })
  }

  public clothingTypeData = (type: string) => {
    this.setState((prevState: State) => ({
      data: (prevState.data).filter(
        (d:Clothing) => d.clothing_type !== type
      )
    }))
  }

  public concatData = (d: {data: Clothing[]}) => {
    this.setState(
      (prevState: State) => ({ data: prevState.data.concat(d.data) })
    )
  }

  public getClothing = (clothingType: string) => {
    fetch(`http://localhost:4000/clothings/type/${clothingType}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(d => this.concatData(d))
  }

  public handleCloseAddClothingPage   = () => this.setState({ isAddClothingPageOpen: false })
  public handleOpenAddClothingPage    = () => this.setState({ isAddClothingPageOpen: true  })
  public handleCloseEditClothingPage  = () => this.setState({ isEditClothingPageOpen: false})
  public handleOpenEditClothingPage   = () => this.setState({ isEditClothingPageOpen: true })

  public handleClothingTypeSelected = (clothingType: string) => {
    const stateString = `is${clothingType[0] + clothingType.substr(1).toLocaleLowerCase()}Selected`
    this.setState((prevState:State) =>  ({[stateString]: !prevState[stateString] } as any)); // workaround https://stackoverflow.com/questions/46305939/dynamic-object-key-with-typescript-in-react-event-handler
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
      data,
      isHamburgerOpen,
      isUserSettingPageOpen,
      isEditClothingPageOpen,
      isAddClothingPageOpen,
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

    const showDefaultPage = !(isHamburgerOpen || isUserSettingPageOpen || isAddClothingPageOpen)

    const menuProps = {
      clothingTypes               : CLOTHING_TYPES,
      handleClothingTypeSelected  : this.handleClothingTypeSelected,
      handleClearSelected         : this.handleClearSelected,
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

    const addClothingProps = {
      clothingTypes                     : CLOTHING_TYPES,
      handleCloseAddClothingPage  : this.handleCloseAddClothingPage
    }

    const editClothingProps = {
      handleCloseEditClothingPage : this.handleCloseEditClothingPage
    }

    const defaultPageProps = {
      menuProps,
      clothes                   : data,
      handleOpenAddClothingPage : this.handleOpenAddClothingPage
    }

    return(
      <div id="main" className="container-fluid">
        <div className="row top-bar">
          <div className="col-2">{isHamburgerOpen ? <HamburgerPage /> : <HamburgerIcon />}</div>
          <div className="col-8 title"><Title /></div>
          <div className="col-2 user-icon">{isUserSettingPageOpen ? <UserSettingPage /> : <UserSettingIcon />}</div>
        </div>
        { isAddClothingPageOpen && <AddClothing {...addClothingProps} /> }
        { isEditClothingPageOpen && <EditClothing {...editClothingProps} /> }
        { showDefaultPage && <DefaultPage {...defaultPageProps} /> }
      </div>
    )
  }
}
