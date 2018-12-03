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
    // this.select_assigned_item = this.select_assigned_item.bind(this);
  }

  // select_assigned_item(event){
  //   this.setState(prevState => ({
  //     select_item_state: !prevState.select_item_state
  //   }));
  // }

  render() {
    // const {select_item_state} = this.state;
    return(
      <div className="row cus_custom-dropdown__footer">
        <div className="cus-assign_div"></div>
        <ul className="select2-selection__rendered cus-collaction_ul font-size_tiny">
          {this.state.products_list.map((product, i) =>
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
