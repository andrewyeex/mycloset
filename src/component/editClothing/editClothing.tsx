import * as React from 'react';
import './editClothing.css';

interface Props {
  handleCloseEditClothingPage : () => void;
}

class EditClothing extends React.PureComponent< Props, {} > {
  public render(){
    const xIcon = require('../../utilities/open-iconic-master/svg/x.svg')

    const {
      handleCloseEditClothingPage
    } = this.props

    return(
      <div id="edit-clothing">
        <div className="row">
          <div className="col-1 offset-11 align-right">
            <img src={xIcon} id="x-icon" onClick={handleCloseEditClothingPage}/>
          </div>
        </div>
        <form>
          <div className="form-group row">
            <div className="offset-2 col-8">
              <h1>EDIT CLOTHING</h1>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditClothing;
