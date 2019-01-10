import axios from 'axios';
import * as React from 'react';
import './addClothing.css';

interface AddClothingProps {
  clothingTypes               : string[];
  handleCloseAddClothing  : () => void;
}
interface AddClothingState {
  name        : string;
  brand       : string;
  color       : string;
  image       : string;
  note        : string;
  date_bought : string;
  clothing_type : string;
}

class AddClothing extends React.PureComponent< AddClothingProps, AddClothingState > {

  private xIcon = require('../../utilities/open-iconic-master/svg/x.svg')

  constructor(props: AddClothingProps){
    super(props)
    this.state = {
      name        : '',
      brand       : '',
      color       : '',
      image       : '',
      note        : '',
      date_bought : '',
      clothing_type : ''
    }
  }

  public handleOnSubmit = () => {
    const {
      name,
      brand,
      color,
      image,
      note,
      date_bought,
      clothing_type
    } = this.state

    axios.post('http://localhost:4000/clothings', {
      name,
      brand,
      color,
      image,
      note,
      date_bought,
      clothing_type
    }).then(
      res => {
        console.log(res)
        console.log(res.data)
        alert('SUCCESS')
      }
    )
  }

  public render() {

    const { clothingTypes } = this.props

    const {
      name,
      brand,
      color,
      image,
      note,
      date_bought,
      clothing_type
    } = this.state

    return(
      <div id="new-clothes-form">
        <div className="row">
          <div className="col-1 offset-11 align-right">
            <img src={this.xIcon} id="x-icon" onClick={this.props.handleCloseAddClothing}/>
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
              <select id="clothe-category" defaultValue={clothing_type} onChange={(e) => this.setState({ clothing_type: e.currentTarget.value })}>
                <option value="" disabled={true}>CATEGORY...</option>
                { clothingTypes.map( (f: string) => <option key={f} value={f.toLowerCase()}>{f}</option>)}
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
                placeholder="BRAND"
                id="clothe-brand"
                value={brand}
                onChange={(e) => this.setState({ brand: e.currentTarget.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <input
                type="text"
                className="form-control-plaintext clothes-text-input"
                placeholder="COLOR"
                id="clothe-color"
                value={color}
                onChange={(e) => this.setState({ color: e.currentTarget.value })}
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
