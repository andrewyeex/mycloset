import * as React from 'react';
import {
  Clothing,
  CLOTHING_TYPES,
  Outfit
} from '../../App'
import AddClothing from '../../component/addClothing/addClothing';
import DefaultPage from '../../component/defaultPage/defaultPage';
import EditClothing from '../../component/editClothing/editClothing';
import HamburgerIcon from '../../component/hamburgerIcon/hamburgerIcon';
import HamburgerPage from '../../component/hamburgerPage/hamburgerPage';
import Title from '../../component/title/title';
import UserSettingIcon from '../../component/userSettingIcon/userSettingIcon';
import UserSettingPage from '../../component/userSettingPage/userSettingPage';
import OutfitPage from '../outfitPage/outfitPage';
import './main.css';


const stateArr = [
  {isShoesSelected    : 'shoes'   },
  {isPantsSelected    : 'pants'   },
  {isShirtsSelected   : 'shirts'  },
  {isPolosSelected    : 'polos'   },
  {isTshirtsSelected  : 'tshirts' },
  {isJacketsSelected  : 'jackets'  },
  {isSweatersSelected : 'sweaters'},
  {isHoodiesSelected  : 'hoodies' },
  {isShortsSelected   : 'shorts'  },
  {isHeadwearSelected : 'headwear'}
]

interface Props {
  clothings : Clothing[];
  outfits   : Outfit[];
  headwear  : Clothing[];
  top       : Clothing[];
  bottom    : Clothing[];
  shoes     : Clothing[];
}

interface State {
  clothings             : Clothing[];
  selectedClothing      : Clothing;
  isClothesPage         : boolean;
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
      selectedClothing      : {
        id          : 0,
        name        : '',
        brand       : '',
        color       : '',
        image       : '',
        note        : '',
        date_bought : '',
        clothing_type : ''
      },
      isClothesPage         : false,
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
      clothings             : [],
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
      clothings: (prevState.clothings).filter(
        (d:Clothing) => d.clothing_type !== type
      )
    }))
  }

  public getClothing = (clothingType: string) => {
    // axios
    //   .get(`http://localhost:4000/clothings/type/${clothingType}`)
    //   .then( res =>
    //     this.setState(
    //       (prevState: State) => ({ data: [...res.data.data, ...prevState.data] })
    //     )
    //   )
  }

  public handleCloseAddClothingPage   = () => this.setState({ isAddClothingPageOpen: false })
  public handleOpenAddClothingPage    = () => this.setState({ isAddClothingPageOpen: true  })
  public handleCloseEditClothingPage  = () => this.setState({ isEditClothingPageOpen: false})
  public handleOpenEditClothingPage   = () => this.state.selectedClothing.id > 0 ?
                                                this.setState({ isEditClothingPageOpen: true }) : // edit page will only open if not an empty object
                                                alert('Need to Select a Clothing')
  public handleClothingSelected       = (clothing: Clothing) => this.setState({ selectedClothing: clothing }, this.handleOpenEditClothingPage)

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
    clothings                  : []
  })

  public render(){
    const {
      clothings,
      outfits,
      headwear,
      top,
      bottom,
      shoes
    } = this.props

    const {
      isClothesPage,
      selectedClothing,
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

    const isDefaultPageOpen = !(isHamburgerOpen || isUserSettingPageOpen || isAddClothingPageOpen || isEditClothingPageOpen)

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
      clothingTypes               : CLOTHING_TYPES,
      handleCloseAddClothingPage  : this.handleCloseAddClothingPage
    }

    const editClothingProps = {
      currentClothingValues       : selectedClothing,
      handleCloseEditClothingPage : this.handleCloseEditClothingPage
    }

    const defaultPageProps = {
      menuProps,
      clothingsArr              : clothings,
      handleClothingSelected    : this.handleClothingSelected,
      handleOpenAddClothingPage : this.handleOpenAddClothingPage
    }

    const outfitPageProps = {
      clothings,
      outfits,
      headwear,
      top,
      bottom,
      shoes
    }

    return(
      <div id="main" className="container-fluid">
        <div className="row top-bar">
          <div className="col-2">{isHamburgerOpen ? <HamburgerPage /> : <HamburgerIcon />}</div>
          <div className="col-8 title"><Title /></div>
          <div className="col-2 user-icon">{isUserSettingPageOpen ? <UserSettingPage /> : <UserSettingIcon />}</div>
        </div>
        <div className="row">
          <div className="col-2 offset-4" onClick={()=>this.setState({ isClothesPage : true })}>CLOTHES</div>
          <div className="col-2 offset-4" onClick={()=>this.setState({ isClothesPage : false })}>OUTFITS</div>
        </div>
        { isAddClothingPageOpen   && <AddClothing   {...addClothingProps  } /> }
        { isEditClothingPageOpen  && <EditClothing  {...editClothingProps } /> }
        { isClothesPage  && isDefaultPageOpen && <DefaultPage   {...defaultPageProps  } /> }
        { !isClothesPage && isDefaultPageOpen && <OutfitPage    {...outfitPageProps   } /> }
      </div>
    )
  }
}
