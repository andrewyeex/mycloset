import * as React from 'react';
import './addNewClothes.css'

interface AddNewClothesProps {
  filters                     : string[];
  handleCloseAddNewClothesPage: () => void;
}
interface AddNewClothesState {}

class AddNewClothes extends React.PureComponent< AddNewClothesProps, AddNewClothesState > {
  public render() {
    const xIcon = require('../../utilities/open-iconic-master/svg/x.svg')
    return(
      <div id="new-clothes-form">
        <div className="row">
          <div className="col-1 offset-11 align-right">
            <img src={xIcon} id="x-icon" onClick={this.props.handleCloseAddNewClothesPage}/>
          </div>
        </div>
        <form>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <h1>NEW CLOTHE</h1>
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <select id="clothe-category" defaultValue="placeholder">
                <option value="placeholder" disabled={true}>CATEGORY...</option>
                { this.props.filters.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <input
                type="text"
                className="form-control-plaintext clothes-text-input"
                placeholder="NAME"
                id="clothe-name"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <input
                type="text"
                className="form-control-plaintext clothes-text-input"
                placeholder="IMAGE PATH"
                id="clothe-image"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <input
                type="text"
                className="form-control-plaintext clothes-text-input"
                placeholder="DATE"
                id="clothe-date-bought"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <input
                type="textarea"
                className="form-control-plaintext clothes-text-input"
                id="clothe-note"
                placeholder="NOTES"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <div id="clothe-submit">SUBMIT</div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddNewClothes;
