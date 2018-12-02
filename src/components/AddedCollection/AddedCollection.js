import React, { Component } from "react";

class AddedCollection extends Component {
  render() {
    return (
      <ul className="select1-selection__rendered cus-collection-bar-ul">
        <li className="cus-choice_label">Collections:</li>
        <li className="special-indicators__item_default select2-selection__choice" title="Item #1" data-select2-id="6"><span className="select2-selection__choice__remove" role="presentation">×</span>B&W dresses</li>
        <li className="special-indicators__item_default select2-selection__choice" title="Item #2" data-select2-id="7"><span className="select2-selection__choice__remove" role="presentation">×</span>Umbrellas</li>
      </ul>
    );
  }
}

export default AddedCollection;
