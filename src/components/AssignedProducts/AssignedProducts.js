import React, { Component } from "react";
import ReactTooltip     from 'react-tooltip';

class AssignedProducts extends Component {
  constructor(props){
    super(props);
    this.state ={
        products_list:[
          {
            id:0,
            img_url: "img/1.png",
            title: "Dress Name1",
            tooltip:"Dress"
          },
          {
            id:1,
            img_url: "img/2.png",
            title: "Umbrellas",
            tooltip:"Umbrella"
          },
          {
            id:2,
            img_url: "img/3.png",
            title: "Longer name",
            tooltip:"Longer"
          },
          {
            id:3,
            img_url: "img/4.png",
            title: "Other product",
            tooltip:"Other"
          }
        ]
    }
  }
  render() {
    return(
      <div className="row cus_custom-dropdown__footer">
        <div className="cus-assign_div"></div>
        <ul className="select2-selection__rendered cus-collaction_ul font-size_tiny">
          {this.state.products_list.map((product, i) =>
            <li className="cus-collection-bar-li special-indicators__item_default" data-select2-id={i} key={i}>
              <img src={product.img_url} className="custom-dropdown__big-image"  alt="logo" data-tip={product.tooltip}/>
              <span className="cus-collection_span">{product.title}</span>
            </li>
          )}
          <li className="cus-collection-bar-li special-indicators__item_default " title="Item #4" data-select2-id="7">
            <button type="button" data-tip="Assign product" className="btn custom-button_small custom-button_outline-interactive">
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
