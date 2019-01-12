import * as React from 'react';
import {
  IAddOutfitPayload,
  IClothing
} from '../../App'
import ClothingCard from '../clothingCard/clothingCard';
import ClothingCards from '../clothingCards/clothingCards';
import './addOutfit.css';

interface IProps {
  clothings           : IClothing[];
  headwear            : IClothing[];
  top                 : IClothing[];
  bottom              : IClothing[];
  shoes               : IClothing[];
  handleSubmitOutfit  : (x: IAddOutfitPayload) => void;
}

interface IState {
  isCSelectorOpen   : boolean;
  cSelectorHandler  : (x?: IClothing) => void
  cSelectorData     : IClothing[];
  headwearSelected  : IClothing;
  topSelected       : IClothing[];
  bottomSelected    : IClothing;
  shoesSelected     : IClothing;
}

const initialClothing = {
  id            : 0,
  name          : 'initial',
  brand         : 'initial',
  color         : 'initial',
  image         : 'initial',
  note          : 'initial',
  date_bought   : 'initial',
  clothing_type : 'initial'
}

class AddOutfit extends React.PureComponent< IProps , IState > {
  constructor(props: IProps){
    super(props)
    this.state = {
      isCSelectorOpen   : false,
      cSelectorHandler  : () => alert('select a handler'),
      cSelectorData     : [initialClothing],
      headwearSelected  : initialClothing,
      topSelected       : [initialClothing],
      bottomSelected    : initialClothing,
      shoesSelected     : initialClothing
    }
  }
  public setSelector = (handler: ()=>void, data : IClothing[]) => this.setState({ cSelectorHandler: handler, cSelectorData : data  })
  public handleSubmitOutfit = () => {
    const { handleSubmitOutfit } = this.props
    const {
      headwearSelected,
      topSelected,
      bottomSelected,
      shoesSelected
    } = this.state
    handleSubmitOutfit({
      headwearSelected,
      topSelected,
      bottomSelected,
      shoesSelected
    })
  }
  public handleSelectTop = (clothing: IClothing) => {
    const { topSelected } = this.state
    if(!!topSelected.length){
      (topSelected[0].id === 0) ?
        this.setState({ topSelected: [clothing] }) :
        this.setState((prevState : IState) => ({ topSelected : [...prevState.topSelected, clothing], isCSelectorOpen : false}))
    }
  }
  public handleSelectHeadwear = (clothing: IClothing) => this.setState({ headwearSelected  :  clothing, isCSelectorOpen : false })
  public handleSelectBottom   = (clothing: IClothing) => this.setState({ bottomSelected    :  clothing, isCSelectorOpen : false })
  public handleSelectShoes    = (clothing: IClothing) => this.setState({ shoesSelected     :  clothing, isCSelectorOpen : false })
  public render(){
    const {
      headwear,
      top,
      bottom,
      shoes
    } = this.props
    const {
      headwearSelected,
      topSelected,
      bottomSelected,
      shoesSelected,
      cSelectorData,
      cSelectorHandler,
      isCSelectorOpen
    } = this.state
    // default values of clothing selected will be passed by props
    const headwearCardProps = {
      clothings: headwear,
      handleCardClick : () => {
        this.setState({
          cSelectorHandler : this.handleSelectHeadwear,
          cSelectorData : headwear,
          isCSelectorOpen : true
        })
      },
      image : headwearSelected.image,
      clothing_type : headwearSelected.clothing_type
    }
    const topCardProps = {
      clothings : top,
      handleCardClick : () => {
        this.setState({
          cSelectorHandler : this.handleSelectTop,
          cSelectorData : top,
          isCSelectorOpen : true
        })
      }
    }
    const bottomCardProps = {
      clothings : bottom,
      handleCardClick : () => {
        this.setState({
          cSelectorHandler : this.handleSelectBottom,
          cSelectorData : bottom,
          isCSelectorOpen : true
        })
      },
      image : bottomSelected.image,
      clothing_type : bottomSelected.clothing_type
    }
    const shoesCardProps = {
      clothings : shoes,
      handleCardClick : () => {
        this.setState({
          cSelectorHandler : this.handleSelectShoes,
          cSelectorData : shoes,
          isCSelectorOpen : true
        })
      },
      handleClothingSelected : this.handleSelectShoes,
      image : shoesSelected.image,
      clothing_type : shoesSelected.clothing_type
    }
    const clothingSelectorProps = {
      clothings : cSelectorData,
      handleClothingSelected : cSelectorHandler
    }
    return(
      <div className="col-12">
        <div className="row">
          <div className="col-1">
            <div className="container" id="outfit-submit-cancel">
              <div className="row">
                <div className="col-12" id="#outfit-submit" onClick={this.handleSubmitOutfit}>SUBMIT</div>
                <div className="col-12" id="#outfit-cancel">CANCEL</div>
              </div>
            </div>
          </div>
          <div className="col-11">
            <div className="row">
              <div className="col-3" >
                <ClothingCard {...headwearCardProps} />
              </div>
              <div className="col-3" >
                { topSelected.map((t : IClothing) => <ClothingCard key={t.id} {...{...topCardProps, image: t.image, clothing_type : t.clothing_type}} />) }
              </div>
              <div className="col-3" >
                <ClothingCard {...bottomCardProps} />
              </div>
              <div className="col-3" >
                <ClothingCard {...shoesCardProps} />
              </div>
            </div>
          </div>
        </div>
        { isCSelectorOpen && <div onClick={() => this.setState({ isCSelectorOpen : false })} className="clothing-modal-container"><div className="clothing-modal"><ClothingCards {...clothingSelectorProps} /></div></div> }
      </div>
    )
  }
}

export default AddOutfit;
