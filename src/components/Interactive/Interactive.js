import React, { Component } from "react";

class Interactive extends Component {
  render() {
    return (
      <div className="row cus-interactive_bar">
        <ul className="cus-special-indicators__list cus-collection-bar-ul d-flexflex-grow-1">
          <li className="special-indicators__item_default d-flex align-items-center mr-4">    
            <span className="icon__comments cus-sucess_comments mr-1"></span>
            <span className="success-message d-flex">Photoshlurp_official was mentioned</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Interactive;
