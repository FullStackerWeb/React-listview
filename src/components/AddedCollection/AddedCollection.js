import React, { Component } from "react";
import BtnCollected from "../Buttons/BtnCollected/BtnCollected";

class AddedCollection extends Component {
  constructor(props){
    super(props);
    this.collectedItem = JSON.parse(localStorage.getItem('collectedItem'));
  }
  render() {
    return (
      <ul className="select1-selection__rendered cus-collection-bar-ul">
        <li className="cus-choice_label">Collections:</li>
        {this.collectedItem.map((item, i) =>
          <BtnCollected collected={item} key={i} />
        )}
      </ul>
    );
  }
}

export default AddedCollection;
