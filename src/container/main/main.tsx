import * as React from 'react';
import {
  CLOTHING_TYPES,
  IClothing,
  IOutfit
} from '../../App'
import AddClothing      from '../../component/addClothing/addClothing';
import Clothing         from '../../component/clothing/clothing';
import EditClothing     from '../../component/editClothing/editClothing';
import Hamburger        from '../../component/hamburger/hamburger';
import HamburgerIcon    from '../../component/hamburgerIcon/hamburgerIcon';
import Title            from '../../component/title/title';
import UserSetting      from '../../component/userSetting/userSetting';
import UserSettingIcon  from '../../component/userSettingIcon/userSettingIcon';
import Outfit           from '../outfit/outfit';
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

interface IProps {
  clothings : IClothing[];
  outfits   : IOutfit[];
  headwear  : IClothing[];
  top       : IClothing[];
  bottom    : IClothing[];
  shoes     : IClothing[];
}

interface IState {
  clothings           : IClothing[];
  selectedClothing    : IClothing;
  isClothing          : boolean;
  isHamburgerOpen     : boolean;
  isUserSettingOpen   : boolean;
  isAddClothingOpen   : boolean;
  isShoesSelected     : boolean;
  isPantsSelected     : boolean;
  isShirtsSelected    : boolean;
  isPolosSelected     : boolean;
  isTshirtsSelected   : boolean;
  isJacketsSelected   : boolean;
  isSweatersSelected  : boolean;
  isHoodiesSelected   : boolean;
  isShortsSelected    : boolean;
  isHeadwearSelected  : boolean;
  isEditClothingOpen  : boolean;
}

export default class Main extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      selectedClothing : {
        id            : 0,
        name          : '',
        brand         : '',
        color         : '',
        image         : '',
        note          : '',
        date_bought   : '',
        clothing_type : ''
      },
      isClothing          : false,
      isHamburgerOpen     : false,
      isUserSettingOpen   : false,
      isEditClothingOpen  : false,
      isAddClothingOpen   : false,
      isShoesSelected     : false,
      isPantsSelected     : false,
      isShirtsSelected    : false,
      isPolosSelected     : false,
      isTshirtsSelected   : false,
      isJacketsSelected   : false,
      isSweatersSelected  : false,
      isHoodiesSelected   : false,
      isShortsSelected    : false,
      isHeadwearSelected  : false,
      clothings           : [],
    }
  }

  public componentDidUpdate = (prevProps: IProps, prevState: IState) => {
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
    const filterFn = (clothing : IClothing) => clothing.clothing_type !== type
    this.setState((prevState: IState) => ({ clothings: (prevState.clothings).filter(filterFn) }))
  }

  public getClothing = (clothingType: string) => {
    // axios
    //   .get(`http://localhost:4000/clothings/type/${clothingType}`)
    //   .then( res =>
    //     this.setState(
    //       (prevState: IState) => ({ data: [...res.data.data, ...prevState.data] })
    //     )
    //   )
  }

  public handleCloseAddClothing   = () => this.setState({ isAddClothingOpen: false })
  public handleOpenAddClothing    = () => this.setState({ isAddClothingOpen: true  })
  public handleCloseEditClothing  = () => this.setState({ isEditClothingOpen: false})
  public handleOpenEditClothing   = () => this.state.selectedClothing.id > 0 ?
                                                this.setState({ isEditClothingOpen: true }) : // edit page will only open if not an empty object
                                                alert('Need to Select a Clothing')
  public handleClothingSelected       = (clothing: IClothing) => this.setState({ selectedClothing: clothing }, this.handleOpenEditClothing)

  public handleClothingTypeSelected = (clothingType: string) => {
    const stateString = `is${clothingType[0] + clothingType.substr(1).toLocaleLowerCase()}Selected`
    this.setState((prevState:IState) =>  ({[stateString]: !prevState[stateString] } as any)); // workaround https://stackoverflow.com/questions/46305939/dynamic-object-key-with-typescript-in-react-event-handler
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
    clothings             : []
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
      isClothing,
      selectedClothing,
      isHamburgerOpen,
      isUserSettingOpen,
      isEditClothingOpen,
      isAddClothingOpen,
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

    const isClothingOpen = !(isHamburgerOpen || isUserSettingOpen || isAddClothingOpen || isEditClothingOpen)

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
      clothingTypes           : CLOTHING_TYPES,
      handleCloseAddClothing  : this.handleCloseAddClothing
    }

    const editClothingProps = {
      currentClothingValues   : selectedClothing,
      handleCloseEditClothing : this.handleCloseEditClothing
    }

    const clothingProps = {
      menuProps,
      clothingsArr            : clothings,
      handleClothingSelected  : this.handleClothingSelected,
      handleOpenAddClothing   : this.handleOpenAddClothing
    }

    const outfitProps = {
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
          <div className="col-2">{isHamburgerOpen ? <Hamburger /> : <HamburgerIcon />}</div>
          <div className="col-8 title"><Title /></div>
          <div className="col-2 user-icon">{isUserSettingOpen ? <UserSetting /> : <UserSettingIcon />}</div>
        </div>
        <div className="row" id="clothe-outfit-selector">
          <div className={`col-6 ${isClothing ? 'active' : ''}`} onClick={()=>this.setState({ isClothing : true })}>CLOTHES</div>
          <div className={`col-6 ${isClothing ? '' : 'active'}`} onClick={()=>this.setState({ isClothing : false })}>OUTFITS</div>
        </div>
        { isAddClothingOpen   && <AddClothing   {...addClothingProps  } /> }
        { isEditClothingOpen  && <EditClothing  {...editClothingProps } /> }
        { isClothing  && isClothingOpen && <Clothing  {...clothingProps } /> }
        { !isClothing && isClothingOpen && <Outfit    {...outfitProps   } /> }
      </div>
    )
  }
}
