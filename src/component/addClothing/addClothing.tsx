import * as React from 'react';
import './addClothing.css';

interface AddClothingProps {
  filters                     : string[];
  handleCloseAddClothingPage  : () => void;
}
interface AddClothingState {
  name        : string;
  image       : string;
  note        : string;
  date_bought : string;
  type        : string;
}

class AddClothing extends React.PureComponent< AddClothingProps, AddClothingState > {
  constructor(props: AddClothingProps){
    super(props)
    this.state = {
      name        : '',
      image       : '',
      note        : '',
      date_bought : '',
      type        : ''
    }
  }

  public handleOnSubmit = () => {
    console.log('submit')
    const {
      name,
      image,
      note,
      date_bought,
      type
    } = this.state
    fetch('http://localhost:4000/clothings',{
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        name,
        image,
        note,
        date_bought,
        type
      }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then (response=>alert('SUCCESS'))
    .catch(error => alert('ERROR'))
  }

  public render() {
    const xIcon = require('../../utilities/open-iconic-master/svg/x.svg')
    const {
      name,
      image,
      note,
      date_bought,
      type
    } = this.state
    return(
      <div id="new-clothes-form">
        <div className="row">
          <div className="col-1 offset-11 align-right">
            <img src={xIcon} id="x-icon" onClick={this.props.handleCloseAddClothingPage}/>
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
              <select id="clothe-category" defaultValue={type} onChange={(e) => this.setState({ type: e.currentTarget.value })}>
                <option value="" disabled={true}>CATEGORY...</option>
                { this.props.filters.map(f => <option key={f} value={f.toLowerCase()}>{f}</option>)}
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
                value={name}
                onChange={(e) => this.setState({ name: e.currentTarget.value })}
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
                value={image}
                onChange={(e) => this.setState({ image: e.currentTarget.value })}
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
                value={date_bought}
                onChange={(e) => this.setState({ date_bought: e.currentTarget.value })}
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
                value={note}
                onChange={(e)=>this.setState({ note: e.currentTarget.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <div id="clothe-submit" onClick={this.handleOnSubmit}>SUBMIT</div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddClothing;
