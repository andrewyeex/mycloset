import axios from 'axios';
import * as React from 'react';
import {
  IAddOutfitPayload,
  IClothing,
  IOutfit,
} from '../../App';
import AddOutfit from '../../component/addOutfit/addOutfit';
import DisplayOutfit from '../../component/displayOutfit/displayOutfit';

import './outfit.css'

interface IProps {
  outfits       : IOutfit[];
  clothings     : IClothing[];
  headwear      : IClothing[];
  top           : IClothing[];
  bottom        : IClothing[];
  shoes         : IClothing[];
}
interface IState {
  isModalContainerOpen : boolean;
  isAddOutfitOpen      : boolean;
}

class Outfit extends React.Component < IProps, IState > {
  constructor(props: IProps){
    super(props)
    this.state = {
      isModalContainerOpen  : false,
      isAddOutfitOpen       : true,
      // handleClothingSelected : (clothing: Clothing) => alert('select something')
    }
  }

  public handleSubmitOutfit = (outfitPayload : IAddOutfitPayload) => {
    const {
      headwearSelected,
      topSelected,
      bottomSelected,
      shoesSelected
    } = outfitPayload
    const payload = {
      headwear  : headwearSelected.id,
      top       : topSelected.map(t => t.id).join(','),
      bottom    : bottomSelected.id,
      shoes     : shoesSelected.id
    }
    axios.post('http://localhost:4000/outfits/', payload).then(res => console.log({res}))
  }

  public render(){

    const {
      outfits,
      clothings,
      headwear,
      top,
      bottom,
      shoes
    } = this.props

    const { isAddOutfitOpen } = this.state

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
        { outfits.map(
          (outfit) => {
            const {
              id,
              shoes    : sh,
              bottom   : bo,
              top      : to,
              headwear : he
            } = outfit

            const props = {
              id,
              shoes    : sh,
              bottom   : bo,
              top      : to,
              headwear : he
            }
            return <DisplayOutfit key={id} {...props} />
          })
        }
      </div>
    )
  }
}

export default Outfit;
