import axios from 'axios';
import * as React from 'react';
import './App.css';
import Main from './container/main/main';
import { filterByClothingType } from './utilities/helper';

export interface IAddOutfitPayload {
  headwearSelected  : IClothing;
  topSelected       : IClothing[];
  bottomSelected    : IClothing;
  shoesSelected     : IClothing;
}

export interface IClothing {
  id            : number;
  name          : string;
  brand         : string;
  color         : string;
  image         : string;
  note          : string;
  date_bought   : string;
  clothing_type : string;
}

export interface IOutfit {
  id        : number;
  headwear  : IClothing,
  top       : IClothing[],
  bottom    : IClothing,
  shoes     : IClothing
}

interface IState {
  clothings : IClothing[],
  outfits   : IOutfit[],
  headwear  : IClothing[];
  top       : IClothing[];
  bottom    : IClothing[];
  shoes     : IClothing[];
}

export const CLOTHING_TYPES = [
  "SHOES",
  "PANTS",
  "SHIRTS",
  "POLOS",
  "TSHIRTS",
  "JACKETS",
  "SWEATERS",
  "HOODIES",
  "SHORTS",
  "HEADWEAR"
]

export const initClothing = {
  id            : 0,
  name          : '',
  brand         : '',
  color         : '',
  image         : '',
  note          : '',
  date_bought   : '',
  clothing_type : ''
}

export const initOutfit = {
  id        : 0,
  headwear  : initClothing,
  top       : [initClothing],
  bottom    : initClothing,
  shoes     : initClothing
}

export default class App extends React.Component < {}, IState > {
  constructor(props: {}){
    super(props)
    this.state = {
      clothings : [initClothing],
      outfits   : [initOutfit],
      headwear  : [initClothing],
      top       : [initClothing],
      bottom    : [initClothing],
      shoes     : [initClothing]
    }
  }
  public componentDidMount = () => {
    // fetch all data and store
    axios.all([
      axios.get('http://localhost:4000/clothings/type/shoes'),
      axios.get('http://localhost:4000/clothings/type/shirts'),
      axios.get('http://localhost:4000/clothings/type/pants'),
      axios.get('http://localhost:4000/clothings/type/polos'),
      axios.get('http://localhost:4000/clothings/type/jackets'),
      axios.get('http://localhost:4000/clothings/type/sweaters'),
      axios.get('http://localhost:4000/clothings/type/hoodies'),
      axios.get('http://localhost:4000/outfits/')
    ])
    .then(axios.spread((shoes, shirts, pants, polos, jackets, sweaters, hoodies, outfits) => {
      const clothings = [
        ...shoes.data.data,
        ...shirts.data.data,
        ...pants.data.data,
        ...polos.data.data,
        ...jackets.data.data,
        ...sweaters.data.data,
        ...hoodies.data.data
      ]
      this.setState({
        clothings,
        headwear      : filterByClothingType( clothings , ['hat']),
        top           : filterByClothingType( clothings , ['jackets', 'sweaters', 'shirts', 'polos']),
        bottom        : filterByClothingType( clothings , ['pants']),
        shoes         : filterByClothingType( clothings , ['shoes']),
        outfits : outfits.data.data
      })
    }));
  }
  public render() {
    const {
      clothings,
      outfits,
      headwear,
      top,
      bottom,
      shoes
    } = this.state

    const mainProps = {
      clothings,
      outfits,
      headwear,
      top,
      bottom,
      shoes
    }
    return (
      <div className="container-fluid">
        <Main {...mainProps} />
      </div>
    );
  }
}
