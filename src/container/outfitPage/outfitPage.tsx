import axios from 'axios';
import * as React from 'react';
import {
  Clothing,
  Outfit
} from '../../App';
import AddOutfit from '../../component/addOutfit/addOutfit';
// import OutfitRow from '../../component/outfitRow/outfitRow';

import './outfitPage.css'

interface Props {
  outfits       : Outfit[];
  clothings     : Clothing[];
  headwear      : Clothing[];
  top           : Clothing[];
  bottom        : Clothing[];
  shoes         : Clothing[];
}
interface State {
  isModalContainerOpen    : boolean;
  isAddOutfitPageOpen     : boolean;
}

class OutfitPage extends React.Component < Props, State > {
  constructor(props: Props){
    super(props)
    this.state = {
      isModalContainerOpen  : false,
      isAddOutfitPageOpen   : true,
      // handleClothingSelected : (clothing: Clothing) => alert('select something')
    }
  }

  public handleSubmitOutfit = (outfit : Outfit) => {
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
      isAddOutfitPageOpen
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
        { isAddOutfitPageOpen && < AddOutfit {...outfitProps} /> }
        {/* {clothings.map((clothing : Clothing) => <OutfitRow key={clothing.id} {...outfitProps} />)} */}
        {/* ADD NEW OUTFIT BUTTON */}
        {/**  <OutfitSelectorModal />  */}
      </div>
    )
  }
}

export default OutfitPage;
