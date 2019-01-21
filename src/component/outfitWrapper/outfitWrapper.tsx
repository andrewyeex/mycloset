import * as React from 'react';
import { IMainContext } from '../../App';
import { MainContext } from '../../container/mainProvider/mainProvider';
import Outfit from '../../container/outfit/outfit';

class OutfitWrapper extends React.PureComponent< {}, {} > {
  public render(){
    return(
      <MainContext.Consumer>
        {
          ({
            handleSubmitOutfit,
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
                handleSubmitOutfit,
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
