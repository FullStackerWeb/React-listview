import React, { Component } from "react";
import ReactTooltip     from 'react-tooltip';
import BtnAssignedItem from "../Buttons/BtnAssignedItem/BtnAssignedItem";

class AssignedProducts extends Component {
  constructor(props){
    super(props);
    this.state ={
        // select_item_state: false,
        products_list:[
          {
            "id":0,
            "title":"Balinese",
            "tooltip": "Balinese",
            "img_url":"https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2734_balinese-460x290-460x290.jpg"
          },
          {
            "id":1,
            "title":"Bengal",
            "tooltip": "Bengal",
            "img_url":"https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2706_bengal-cat-breed-picture.jpg"
          },
          {
            "id":2,
            "title":"Birman",
            "tooltip": "Birman",
            "img_url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2708_birman-460x290-460x290.jpg"
          },
          {
            "id":3,
            "title":"Bombay",
            "tooltip": "Bombay",
            "img_url":"https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2756_Bombay-cat-breed.jpg"
          },
          {
            "id":4,
            "title":"British Shorthair",
            "tooltip": "Shorthair",
            "img_url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2744_british-shorthair-460x290-460x290.jpg"
          },
          {
            "id":5,
            "title":"Burmese",
            "tooltip": "Burmese",
            "img_url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2688_burmese-cat-breed-picture.jpg"
          },
          {
            "id":6,
            "title":"Burmilla",
            "tooltip": "Balinese",
            "img_url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2760_burmilla-460x290-460x290.jpg"
          },
          {
            "id": 7,
            "title": "Chartreux",
            "tooltip": "Chartreux",
            "img_url": "https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg"
          },
          {
            "id": 8,
            "title": "Chinese Li...",
            "tooltip": "Li Hua",
            "img_url": "https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2758_chinese-li-460x290-460x290.jpg"
          },
          {
            "id": 9,
            "title": "Colorpoint Shorthair",
            "tooltip": "Shorthair",
            "img_url": "https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2732_colorpoint-shorthair-460x290-460x290.jpg"
          },
          {
            "id": 10,
            "title": "Cornish Rex",
            "tooltip": "Cornish",
            "img_url": "https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2696_cornish-rex-460x290-460x290.jpg"
          },
          {
            "id": 11,
            "title": "Cymric",
            "tooltip": "Cymric",
            "img_url": "https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2690_cymrc-460x290-460x290.jpg"
          },
        ]        
    }
    this.tempList = [];
    this.selectedProducts = JSON.parse(localStorage.getItem('assignedItem'));
  }

  componentWillMount() {
    // this.tempList = this.state.products_list.filter( product => 
    //   this.selectedProducts.includes(product.id)
    // )
    // console.log(this.tempList);
    // debugger;
  }

  render() {
    const {products_list} = this.state;
    return(
      <div className="row cus_custom-dropdown__footer">
        <div className="cus-assign_div"></div>
        <ul className="select2-selection__rendered cus-collaction_ul font-size_tiny">
          {products_list.filter( product => this.selectedProducts.includes(product.id)).map((product, i) => 
            <BtnAssignedItem assignedItem={product} key={i}/>
          )}
          <li className="cus-collection-bar-li special-indicators__item_default " title="Item #4" data-select2-id="7">
            <button type="button" data-tip="Assign product" className="btn cus-assigned_add_btn custom-button_small custom-button_outline-interactive">
              <span className="icon__products mr-1"></span>
              <span className="icon__plus"></span>
            </button>
          </li>
        </ul>

        <ReactTooltip />
      </div>
    );
  }
}

export default AssignedProducts;
