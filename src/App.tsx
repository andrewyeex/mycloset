import * as React from 'react';
// import './App.css';
import MainProvider from './container/mainProvider/mainProvider';
import MainWrapper from './container/mainWrapper/mainWrapper';

export interface IMainContext {
  handleSubmitOutfit : (x : IAddOutfitPayload) => void;
  clothings : IClothing[],
  outfits   : IOutfit[],
  headwear  : IClothing[];
  top       : IClothing[];
  bottom    : IClothing[];
  shoes     : IClothing[];
}
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

export default class App extends React.Component < {}, {} > {
  public render() {
    return (
      <div className="container-fluid">
        <MainProvider>
          <MainWrapper />
        </MainProvider>
      </div>
    );
  }
}
