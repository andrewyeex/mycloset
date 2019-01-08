import axios from 'axios';
import * as React from 'react';
import {
  Clothing,
  Outfit
} from '../../App';
import AddOutfit from '../../component/addOutfit/addOutfit';
import OutfitRow from '../../component/outfitRow/outfitRow';
import { filterByClothingType } from '../../utilities/helper';


// import ClothingCards from '../../component/clothingCards/clothingCards'

import './outfitPage.css'

interface Props {
  outfits                 : Outfit[];
  clothings               : Clothing[];
}
interface State {
  headwear      : Clothing[];
  top           : Clothing[];
  bottom        : Clothing[];
  shoes         : Clothing[];
  isModalContainerOpen    : boolean;
  isAddOutfitPageOpen     : boolean;
  // handleClothingSelected  : (clothing: Clothing) => void;
}

// const initialClothing = {
//   id            : 0,
//   name          : 'initial',
//   brand         : 'initial',
//   color         : 'initial',
//   image         : 'initial',
//   note          : 'initial',
//   date_bought   : 'initial',
//   clothing_type : 'initial'
// }

class OutfitPage extends React.Component < Props, State > {
  // private addIcon = require('../../utilities/open-iconic-master/svg/plus.svg');
  constructor(props: Props){
    super(props)
    const { clothings } = props
    this.state = {
      headwear      : filterByClothingType( clothings , ['hat']),
      top           : filterByClothingType( clothings , ['jackets, sweaters, shirts, polos']),
      bottom        : filterByClothingType( clothings , ['pants']),
      shoes         : filterByClothingType( clothings , ['shoes']),
      isModalContainerOpen  : false,
      isAddOutfitPageOpen   : false,
      // handleClothingSelected : (clothing: Clothing) => alert('select something')
    }
  }

  public handleSubmitOutfit = (outfit : Outfit) => {
    !!outfit.id ?
      axios.put(`http://localhost:4000/outfits/${outfit.id}`, outfit).then(res => console.log({res})) :
      axios.post('http://localhost:4000/outfits/', outfit).then(res => console.log({res}))
  }

  public render(){
    const {
      clothings
    } = this.props
    const {
      isAddOutfitPageOpen,
      headwear,
      top,
      bottom,
      shoes
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
        {isAddOutfitPageOpen && < AddOutfit {...outfitProps} />}
        {clothings.map((clothing : Clothing) => <OutfitRow key={clothing.id} {...outfitProps} />)}
        {/* ADD NEW OUTFIT BUTTON */}
      </div>
    )
  }
}

export default OutfitPage;
