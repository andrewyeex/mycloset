import * as React from 'react';
import { MainContext } from '../../container/mainProvider/mainProvider';
import { IMainContext } from '../../container/mainWrapper/mainWrapper';
import Outfit from '../../container/outfit/outfit';

class OutfitWrapper extends React.PureComponent< {}, {} > {
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
          } : IMainContext) =>
          <Outfit
            {
              ...{
                clothings,
                outfits,
                headwear,
                top,
                bottom,
                shoes
              }
            }
          />
        }
      </MainContext.Consumer>
    )
  }
}

export default OutfitWrapper;
