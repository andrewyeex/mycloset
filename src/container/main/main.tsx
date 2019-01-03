import * as React from 'react';
import AddNewClothes from '../../component/addNewClothes/addNewClothes';
import DefaultPage from '../../component/defaultPage/defaultPage';
import HamburgerIcon from '../../component/hamburgerIcon/hamburgerIcon';
import HamburgerPage from '../../component/hamburgerPage/hamburgerPage';
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
    stateArr.forEach(obj => {
      const key = Object.keys(obj).pop()
      const val = !!key && obj[key]
      if(
        !!key &&
        !!val &&
        (prevState[key] !== this.state[key])
      ){
        !!this.state[key] ? this.fetchType(val) : this.filterData(val)
      }
    })
  }

  public filterData = (type: string) => {
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

  public fetchType = (type: string) => {
    fetch(`http://localhost:4000/clothings/type/${type}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(d => this.concatData(d))
  }

  public handleCloseAddNewClothesPage = () => this.setState({ isAddNewClothesPageOpen: false })
  public handleOpenAddNewClothesPage  = () => this.setState({ isAddNewClothesPageOpen: true  })

  public handleFilterSelected = (filter: string) => {
    const stateString = `is${filter[0] + filter.substr(1).toLocaleLowerCase()}Selected`
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

    const showDefaultPage = !(isHamburgerOpen || isUserSettingPageOpen || isAddNewClothesPageOpen)

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

    const defaultPageProps = {
      menuProps,
      clothes                     : data,
      handleOpenAddNewClothesPage : this.handleOpenAddNewClothesPage
    }

    return(
      <div id="main" className="container-fluid">
        <div className="row top-bar">
          <div className="col-2">{isHamburgerOpen ? <HamburgerPage /> : <HamburgerIcon />}</div>
          <div className="col-8 title"><Title /></div>
          <div className="col-2 user-icon">{isUserSettingPageOpen ? <UserSettingPage /> : <UserSettingIcon />}</div>
        </div>
        { isAddNewClothesPageOpen && <AddNewClothes {...addNewClothesProps} /> }
        { showDefaultPage && <DefaultPage {...defaultPageProps} /> }
      </div>
    )
  }
}
