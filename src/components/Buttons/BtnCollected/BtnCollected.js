import React, { Component } from "react";

class BtnCollected extends Component {

  render() {
    const {collected} = this.props;
    return (
      <li className="special-indicators__item_default select2-selection__choice" title="Item #1">
        <span className="select2-selection__choice__remove" role="presentation">×</span>
        {collected.name}
      </li>
    );
  }
}

export default BtnCollected;