import React, { Component } from "react";
import BtnCollection from "../Buttons/BtnCollection/BtnCollection";

class Collections extends Component {
  constructor(){
    super();
    this.state = {
      collection_filters: [
        {
          "id": 0,
          "name":"Collection name 1"
        },
        {
          "id": 1,
          "name":"B&W dresses"
        },
        {
          "id": 2,
          "name":"Collection 3"
        },
        {
          "id": 3,
          "name":"Umbrellas"
        },
        {
          "id": 4,
          "name":"Other collection"
        },
        {
          "id": 5,
          "name":"This is a collection"
        },
        {
          "id": 6,
          "name":"All collections"
        },
      ]
    }
    this.collectedItem = [];
  }

  handleClick = (collectionData, state) => {
    if(state)
      this.collectedItem.push(collectionData);
    else{
      this.collectedItem.forEach((element, index) => {
        if(element.id === collectionData.id)
          this.collectedItem.splice(index, 1);
      });
    }

    localStorage.setItem('collectedItem', JSON.stringify(this.collectedItem));
  }

  render() {
    return (
      <div className="dropdown-menu custom-dropdown__menu d-block position-static cus-collection_bar">
        <div className="custom-dropdown__input_container custom-dropdown__input_container_wide p-1">
          <div className="position-relative">
            <input type="text" className="w-100" placeholder="Type to filter collections..." />
            <span className="input_icon input_icon-right icon__search"></span>
          </div>
        </div>

        <div className="custom-dropdown__scroll-container">
          {this.state.collection_filters.map((collection, i) => 
            <BtnCollection collection={collection} onClick={this.handleClick} key={i}/>
          )}
        </div>
        
        <div className="custom-dropdown__footer d-flex justify-content-between">
          <button type="button" onClick={this.props.cancelClick} className="custom-dropdown__footer-button custom-dropdown__footer-button_default">
            Cancel
          </button>
          <button type="button" onClick={this.props.addClick} className="custom-dropdown__footer-button custom-dropdown__footer-button_action">
            Add selected
          </button>
        </div>
      </div>
    );
  }
}

export default Collections;
