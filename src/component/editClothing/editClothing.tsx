import axios from 'axios';
import * as React from 'react';
import {
  CLOTHING_TYPES,
  IClothing
} from '../../App';
import './editClothing.css';

interface IProps {
  currentClothingValues   : IClothing;
  handleCloseEditClothing : () => void;
}

class EditClothing extends React.PureComponent< IProps, IClothing > {

  private xIcon = require('../../utilities/open-iconic-master/svg/x.svg')

  constructor(props: IProps){
    super(props)
    const {
      id,
      name,
      brand,
      color,
      image,
      note,
      date_bought,
      clothing_type
    } = props.currentClothingValues
    this.state = {
      id,
      name,
      brand,
      color,
      image,
      note,
      date_bought,
      clothing_type
    }
  }

  public handleOnUpdate = () => {
    const {
      id,
      name,
      brand,
      color,
      image,
      note,
      date_bought,
      clothing_type
    } = this.state

    axios
      .put(`http://localhost:4000/clothings/${id}`, {
        name,
        brand,
        color,
        image,
        note,
        date_bought,
        clothing_type
      })
      .then(
        res => {
          console.log(res)
          console.log(res.data)
          alert('SUCCESS')
        }
      )
  }

  public render(){

    const {
      handleCloseEditClothing
    } = this.props

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
      <div id="edit-clothing">
        <div className="row">
          <div className="col-1 offset-11 align-right">
            <img src={this.xIcon} id="x-icon" onClick={handleCloseEditClothing}/>
          </div>
        </div>
        <form>
          <div className="form-group row">
            <div className="offset-2 col-8">
              <h1>EDIT CLOTHING</h1>
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <select id="clothe-category" defaultValue={clothing_type} onChange={(e) => this.setState({ clothing_type: e.currentTarget.value })}>
                <option value="" disabled={true}>CATEGORY...</option>
                { CLOTHING_TYPES.map( (f: string) => <option key={f} value={f.toLowerCase()}>{f}</option>)}
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
                value={name || ''}
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
                value={brand || ''}
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
                value={color || ''}
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
                value={image || ''}
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
                value={date_bought || ''}
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
                value={note || ''}
                onChange={(e)=>this.setState({ note: e.currentTarget.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="offset-2 col-8">
              <div id="clothe-update" onClick={this.handleOnUpdate}>UPDATE</div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditClothing;
