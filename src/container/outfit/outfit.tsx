import * as React from 'react';
import {
  IMainContext,
} from '../../App';
import AddOutfit from '../../component/addOutfit/addOutfit';
import DisplayOutfit from '../../component/displayOutfit/displayOutfit';

import './outfit.css'
interface IState {
  isModalContainerOpen : boolean;
  isAddOutfitOpen      : boolean;
}

class Outfit extends React.Component < IMainContext, IState > {

  public state = {
    isModalContainerOpen  : false,
    isAddOutfitOpen       : true,
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
      handleSubmitOutfit : this.props.handleSubmitOutfit
    }

    return(
      <div className="row main-content">
        { isAddOutfitOpen && < AddOutfit {...outfitProps} /> }
        { outfits.map((outfit) => <DisplayOutfit key={outfit.id} {...outfit} />)}
      </div>
    )
  }
}

export default Outfit;
