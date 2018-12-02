import React, { Component } from "react";

class BtnUnhealthy extends Component {
  render() {
    return (
      <button type="button"  data-tip="Assign product" className="btn cus-remove_btn custom-button_small custom-button_outline-interactive_unhealth">
        <span className="icon__error mr-2"></span>
        Unhealthy
      </button>
    );
  }
}

export default BtnUnhealthy;
