import axios from 'axios';
import * as React from 'react';
import './App.css';
import Main from './container/main/main';

export interface Clothing {
  id            : number;
  name          : string;
  brand         : string;
  color         : string;
  image         : string;
  note          : string;
  date_bought   : string;
  clothing_type : string;
}

export interface Outfit {
  id        : number;
  headwear  : Clothing[],
  top       : Clothing[],
  bottom    : Clothing[],
  shoes     : Clothing[]
}

interface State {
  clothings : Clothing[],
  outfits   : Outfit[]
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

export default class App extends React.Component < {}, State > {
  constructor(props: {}){
    super(props)
    this.state = {
      clothings : [],
      outfits   : [{
        id        : 0,
        headwear  : [],
        top       : [],
        bottom    : [],
        shoes     : []
      }]
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
        outfits : outfits.data.data
      })
    }));
  }
  public render() {
    const {
      clothings,
      outfits
    } = this.state

    const mainProps = {
      clothings,
      outfits
    }
    return (
      <div className="container-fluid">
        <Main {...mainProps} />
      </div>
    );
  }
}
