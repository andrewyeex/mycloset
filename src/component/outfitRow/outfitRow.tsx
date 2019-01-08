import * as React from 'react';
import {
  Clothing,
  Outfit
} from '../../App';


interface Props {
  clothings          : Clothing[]
  handleSubmitOutfit : (x: Outfit) => void;
}

interface State {
  isShowingEdit     : boolean;
  headwearSelected  : Clothing[];
  topSelected       : Clothing[];
  bottomSelected    : Clothing[];
  shoesSelected     : Clothing[];
}

class OutfitRow extends React.PureComponent< Props , State > {
  constructor(props: Props){
    super(props)
    // const { clothings } = props
    this.state = {
      isShowingEdit : false,
      headwearSelected  : [],
      topSelected       : [],
      bottomSelected    : [],
      shoesSelected     : [],
    }
  }
  public handleMouseHover = () => this.setState((prevState : State) => ({ isShowingEdit : !prevState.isShowingEdit }))
  public handleSelectHeadwear = (clothing: Clothing) => this.setState({ headwearSelected  : [clothing] })
  public handleSelectTop      = (clothing: Clothing) => this.setState({ topSelected       : [clothing] })
  public handleSelectBottom   = (clothing: Clothing) => this.setState({ bottomSelected    : [clothing] })
  public handleSelectShoes    = (clothing: Clothing) => this.setState({ shoesSelected     : [clothing] })
  public render(){
    const {
      isShowingEdit
    } = this.state
    /** ON HOVER ON DIV, SHOW EDIT CSS   */
    /** ON CLICK DIV, ENTER EDIT MODE    */
    /** CLICK THE CHECK BUTTON WHEN DONE */
    return(
      <div className="row outfit">
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-4 col-sm-12" >TEST</div>
        <div className="col-2">
          CONDITIONAL RENDER WITH ABSOLUTE POSITION
        </div>
        <div className="col-12"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {isShowingEdit && <div className="edit-outfit">TEST</div>}
        </div>
      </div>
    )
  }
}

export default OutfitRow;