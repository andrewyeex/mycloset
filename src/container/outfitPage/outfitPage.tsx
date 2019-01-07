import axios from 'axios';
import * as React from 'react';
import ClothingCards from '../../component/clothingCards/clothingCards'
import { Clothing } from '../main/main';
import './outfitPage.css'

interface State {
  data       : Clothing[];
  clothingsArr: Clothing[];
  headwearSelected : number;
  topSelected : number;
  bottomSelected : number;
  shoesSelected : number;
  isModalContainerOpen : boolean;
  handleClothingSelected : (id: number) => void;
}

class OutfitPage extends React.Component < {}, State > {
  private addIcon = require('../../utilities/open-iconic-master/svg/plus.svg');
  constructor(props: {}){
    super(props)
    this.state = {
      data : [],
      clothingsArr: [],
      headwearSelected : 0,
      topSelected : 0,
      bottomSelected : 0,
      shoesSelected : 0,
      isModalContainerOpen: false,
      handleClothingSelected : (id: number) => alert('select something')
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
    ])
    .then(axios.spread((shoes, shirts, pants, polos, jackets, sweaters, hoodies) => {
      const data = [
        ...shoes.data.data,
        ...shirts.data.data,
        ...pants.data.data,
        ...polos.data.data,
        ...jackets.data.data,
        ...sweaters.data.data,
        ...hoodies.data.data
      ]
      this.setState({ data })
    }));
  }

  public handleSelectHeadwear = (clothingID: number) => this.setState({ headwearSelected  : clothingID })
  public handleSelectTop      = (clothingID: number) => this.setState({ topSelected       : clothingID })
  public handleSelectBottom   = (clothingID: number) => this.setState({ bottomSelected    : clothingID })
  public handleSelectShoes    = (clothingID: number) => this.setState({ shoesSelected     : clothingID })

  public render(){
    const {
      clothingsArr,
      handleClothingSelected,
      isModalContainerOpen
    } = this.state
    const clothingCardsProps = {
      clothings : clothingsArr,
      handleClothingSelected
    }
    return(
      <div className="row main-content">
        <div className="card-container">
          <div className="row" >
            <div className="col-3">
              <div
              className="clothe-card add"
              onClick={()=>alert('HEADWEAR')}>
              HEADWEAR
                <img src={this.addIcon} alt="Add New Clothes" />
              </div>
            </div>
            <div className="col-3">
              <div
              className="clothe-card add"
              onClick={()=>{
                this.setState({
                  isModalContainerOpen: true,
                  handleClothingSelected: (id: number) => this.handleSelectTop(id)
                })
              }}>
              TOP
                <img src={this.addIcon} alt="Add New Clothes" />
              </div>
            </div>
            <div className="col-3">
              <div
                className="clothe-card add"
                onClick={()=>alert('BOTTOM')}>
                BOTTOM
                <img src={this.addIcon} alt="Add New Clothes" />
              </div>
            </div>
            <div className="col-3">
              <div
              className="clothe-card add"
              onClick={()=>alert('SHOES')}>
              SHOES
                <img src={this.addIcon} alt="Add New Clothes" />
              </div>
            </div>
          </div>
          {isModalContainerOpen &&
            <div className="card-modal-container">
              <div className="card-modal">
                {!!clothingsArr.length && <ClothingCards {...clothingCardsProps} />}
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default OutfitPage;
