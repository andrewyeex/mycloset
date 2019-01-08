import * as React from 'react';
import {
  Clothing,
  Outfit
} from '../../App'

interface Props {
  clothings          : Clothing[];
  handleSubmitOutfit : (x: Outfit) => void;
}

class AddOutfit extends React.PureComponent< Props , {} > {
  public render(){
    return(
      <div className="row">
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-4 col-sm-12" >TEST</div>
      </div>
    )
  }
}

export default AddOutfit;