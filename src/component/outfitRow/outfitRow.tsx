// import * as React from 'react';
// import {
//   Clothing,
//   Outfit
// } from '../../App';
// import {
//   getImageArr
// } from '../../utilities/helper';
// import ClothingCard from '../clothingCard/clothingCard';
// // import ClothingCards from '../clothingCards/clothingCards';


// interface Props {
//   clothings          : Clothing[]
//   handleSubmitOutfit : (x: Outfit) => void;
//   headwear : Clothing[];
//   top : Clothing[];
//   bottom : Clothing[];
//   shoes : Clothing[];
// }

// interface State {
//   isShowingEdit     : boolean;
//   isHeadSelectOpen  : boolean;
//   headwearSelected  : Clothing[];
//   topSelected       : Clothing[];
//   bottomSelected    : Clothing[];
//   shoesSelected     : Clothing[];
// }

// const initialClothing = {
//   id            : 0,
//   name          : 'initial',
//   brand         : 'initial',
//   color         : 'initial',
//   image         : 'initial',
//   note          : 'initial',
//   date_bought   : 'initial',
//   clothing_type : 'initial'
// }
// class OutfitRow extends React.PureComponent< Props , State > {
//   constructor(props: Props){
//     super(props)
//     this.state = {
//       isShowingEdit     : false,
//       isHeadSelectOpen  : false,
//       headwearSelected  : [initialClothing],
//       topSelected       : [initialClothing],
//       bottomSelected    : [initialClothing],
//       shoesSelected     : [initialClothing],
//     }
//   }
//   public handleMouseHover     = () => this.setState((prevState : State) => ({ isShowingEdit : !prevState.isShowingEdit }))
//   public handleSelectHeadwear = (clothing: Clothing) => this.setState({ headwearSelected  : [clothing] })
//   public handleSelectTop      = (clothing: Clothing) => this.setState({ topSelected       : [clothing] })
//   public handleSelectBottom   = (clothing: Clothing) => this.setState({ bottomSelected    : [clothing] })
//   public handleSelectShoes    = (clothing: Clothing) => this.setState({ shoesSelected     : [clothing] })
//   public render(){
//     const {
//       isShowingEdit,
//       // isHeadSelectOpen
//     } = this.state
//     const {
//       headwear,
//       top,
//       bottom,
//       shoes
//     } = this.props
//     const headwearCardProps = {
//       imgArr : getImageArr(headwear),
//       handleCardClick : this.handleSelectHeadwear
//     }
//     // const headwearProps = {
//     //   clothings : headwear,
//     //   handleClothingSelected : this.handleSelectHeadwear
//     // }
//     const topCardProps = {
//       imgArr :  getImageArr(top),
//       handleCardClick : this.handleSelectTop
//     }
//     const bottomCardProps = {
//       imgArr : getImageArr(bottom),
//       handleCardClick : this.handleSelectBottom
//     }
//     const shoesCardProps = {
//       imgArr : getImageArr(shoes),
//       handleCardClick : this.handleSelectShoes
//     }
//     /** ON HOVER ON DIV, SHOW EDIT CSS   */
//     /** ON CLICK DIV, ENTER EDIT MODE    */
//     /** CLICK THE CHECK BUTTON WHEN DONE */
//     return(
//       <div className="row outfit">
//         <div className="col-4 col-sm-12" >
//           <ClothingCard {...headwearCardProps} />
//           {/* {isHeadSelectOpen && <div><ClothingCards {...headwearProps} /></div>} */}
//         </div>
//         <div className="col-4 col-sm-12" >
//           <ClothingCard {...topCardProps} />
//         </div>
//         <div className="col-4 col-sm-12" >
//           <ClothingCard {...bottomCardProps} />
//         </div>
//         <div className="col-4 col-sm-12" >
//           <ClothingCard {...shoesCardProps} />
//         </div>
//         <div className="col-2">
//           CONDITIONAL RENDER WITH ABSOLUTE POSITION
//         </div>
//         <div
//           className="col-12 edit-outfit-container"
//           onMouseEnter={this.handleMouseHover}
//           onMouseLeave={this.handleMouseHover}
//         >
//           {isShowingEdit && <div className="edit-outfit">TEST</div>}
//         </div>
//       </div>
//     )
//   }
// }

// export default OutfitRow;