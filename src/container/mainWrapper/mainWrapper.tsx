import * as React from 'react';
import {
  IClothing,
  IOutfit
} from '../../App';
import Main from '../main/main';
import { MainContext } from '../mainProvider/mainProvider';


export interface IMainContext {
  clothings : IClothing[],
  outfits   : IOutfit[],
  headwear  : IClothing[];
  top       : IClothing[];
  bottom    : IClothing[];
  shoes     : IClothing[];
}

class MainWrapper extends React.PureComponent < {}, {} > {
  public render(){
    return(
      <MainContext.Consumer>
        {
          ({
            clothings,
            outfits,
            headwear,
            top,
            bottom,
            shoes
          } : IMainContext) => <Main {...{clothings}} />
        }
      </MainContext.Consumer>
    )
  }
}

export default MainWrapper;