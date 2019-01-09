import * as React from 'react';
import {
  Clothing,
  Outfit
} from '../../App'
import ClothingCard from '../clothingCard/clothingCard';
import ClothingCards from '../clothingCards/clothingCards';

interface Props {
  clothings           : Clothing[];
  headwear            : Clothing[];
  top                 : Clothing[];
  bottom              : Clothing[];
  shoes               : Clothing[];
  handleSubmitOutfit  : (x: Outfit) => void;
}

interface State {
  isCSelectorOpen   : boolean;
  cSelectorHandler  : (x?: Clothing) => void
  cSelectorData     : Clothing[];
  headwearSelected  : Clothing;
  topSelected       : Clothing[];
  bottomSelected    : Clothing;
  shoesSelected     : Clothing;
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

class AddOutfit extends React.PureComponent< Props , State > {
  constructor(props: Props){
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
  public handleSelectTop      = (clothing: Clothing) => {
    const { topSelected } = this.state
    if(!!topSelected.length){
      (topSelected[0].id === 0) ?
        this.setState({ topSelected: [clothing] }) :
        this.setState((prevState : State) => ({ topSelected : [...prevState.topSelected, clothing] }))
    }
  }
  public handleSelectHeadwear = (clothing: Clothing) => this.setState({ headwearSelected  :  clothing })
  public handleSelectBottom   = (clothing: Clothing) => this.setState({ bottomSelected    :  clothing })
  public handleSelectShoes    = (clothing: Clothing) => this.setState({ shoesSelected     :  clothing })
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
      handleCardClick : () => alert('test'),
      handleClothingSelected : this.handleSelectHeadwear,
      image : headwearSelected.image,
      clothing_type : headwearSelected.clothing_type
    }
    const topCardProps = {
      clothings : top,
      handleCardClick : () => alert('test'),
      handleClothingSelected : this.handleSelectTop,
    }
    const bottomCardProps = {
      clothings : bottom,
      handleCardClick : () => alert('test'),
      handleClothingSelected : this.handleSelectBottom,
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
          <div className="col-1">test</div>
          <div className="col-11">
            <div className="row">
              <div className="col-3" >
                <ClothingCard {...headwearCardProps} />
              </div>
              <div className="col-3" >
                { topSelected.map((t : Clothing) => <ClothingCard key={t.id} {...{...topCardProps, image: t.image, clothing_type : t.clothing_type}} />) }
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
        { isCSelectorOpen && <div className="clothing-modal"><ClothingCards {...clothingSelectorProps} /></div> }
      </div>
    )
  }
}

export default AddOutfit;
