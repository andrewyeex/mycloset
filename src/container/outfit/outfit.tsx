import axios from 'axios';
import * as React from 'react';
import {
  IClothing,
  IOutfit
} from '../../App';
import AddOutfit from '../../component/addOutfit/addOutfit';
// import OutfitRow from '../../component/outfitRow/outfitRow';

import './outfit.css'

interface Props {
  outfits       : IOutfit[];
  clothings     : IClothing[];
  headwear      : IClothing[];
  top           : IClothing[];
  bottom        : IClothing[];
  shoes         : IClothing[];
}
interface State {
  isModalContainerOpen    : boolean;
  isAddOutfitOpen     : boolean;
}

class Outfit extends React.Component < Props, State > {
  constructor(props: Props){
    super(props)
    this.state = {
      isModalContainerOpen  : false,
      isAddOutfitOpen   : true,
      // handleClothingSelected : (clothing: Clothing) => alert('select something')
    }
  }

  public handleSubmitOutfit = (outfit : IOutfit) => {
    const payload = {
      headwear  : [outfit.id],
      top       : [outfit.id],
      bottom    : [outfit.id],
      shoes     : [outfit.id]
    }
    !!outfit.id ?
      axios.put(`http://localhost:4000/outfits/${outfit.id}`, payload).then(res => console.log({res})) :
      axios.post('http://localhost:4000/outfits/', payload).then(res => console.log({res}))
  }

  public render(){
    const {
      clothings,
      headwear,
      top,
      bottom,
      shoes
    } = this.props
    const {
      isAddOutfitOpen
    } = this.state
    const outfitProps = {
      clothings,
      headwear,
      top,
      bottom,
      shoes,
      handleSubmitOutfit : this.handleSubmitOutfit
    }

    return(
      <div className="row main-content">
        { isAddOutfitOpen && < AddOutfit {...outfitProps} /> }
        {/* {clothings.map((clothing : Clothing) => <OutfitRow key={clothing.id} {...outfitProps} />)} */}
        {/* ADD NEW OUTFIT BUTTON */}
        {/**  <OutfitSelectorModal />  */}
      </div>
    )
  }
}

export default Outfit;
