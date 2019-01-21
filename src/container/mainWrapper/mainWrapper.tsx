import * as React from 'react';
import {
  IMainContext
} from '../../App';
import Main from '../main/main';
import { MainContext } from '../mainProvider/mainProvider';

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