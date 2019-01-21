import axios from 'axios';
import * as React from 'react';
import {
  IAddOutfitPayload,
  IClothing,
  initClothing,
  initOutfit,
  IOutfit
} from '../../App'
import { filterByClothingType } from '../../utilities/helper';

export const MainContext = React.createContext({});

interface IState {
  clothings : IClothing[],
  outfits   : IOutfit[],
  headwear  : IClothing[];
  top       : IClothing[];
  bottom    : IClothing[];
  shoes     : IClothing[];
}

export default class MainProvider extends React.Component < {}, IState > {
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

  public handleSubmitOutfit = (outfitPayload : IAddOutfitPayload) => {
    const {
      headwearSelected,
      topSelected,
      bottomSelected,
      shoesSelected
    } = outfitPayload
    const payload = {
      headwear  : headwearSelected.id,
      top       : topSelected.map(t => t.id).join(','),
      bottom    : bottomSelected.id,
      shoes     : shoesSelected.id
    }
    axios.post('http://localhost:4000/outfits/', payload).then(res => console.log({res}))
  }

  public render(){
    const {
      clothings,
      outfits,
      headwear,
      top,
      bottom,
      shoes
    } = this.state
    return(
      <MainContext.Provider
        value={{
          handleSubmitOutfit : this.handleSubmitOutfit,
          clothings,
          outfits,
          headwear,
          top,
          bottom,
          shoes
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    )
  }
}
