import React, { Component } from "react";

class NormalActive extends Component {
  render() {
    return (
      <div className="row cus-interactive_bar">
        <ul className="cus-special-indicators__list cus-collection-bar-ul d-flex flex-grow-1">
          <li className="special-indicators__item_default d-flex align-items-center mr-4">    
            <span className="icon__social-instagram mr-1"></span>
            <span className="font-size_caption">gabriel.alexandru17</span>
          </li>
          <li className="special-indicators__item_default d-flex align-items-center mr-4">    
            <span className="icon__likes mr-1"></span>
            <span className="font-size_caption">30</span>
          </li>
          <li className="special-indicators__item_default d-flex align-items-center mr-4">    
            <span className="icon__comments mr-1"></span>
            <span className="font-size_caption">3</span>
          </li>
          {/* <li className="special-indicators__item_default d-flex align-items-center mr-4">    
            <span className="icon__user mr-1"></span>
            <span className="font-size_caption">120</span>
          </li> */}
          <li className="special-indicators__item_default d-flex align-items-center mr-4">    
            <span className="icon__calendar mr-1"></span>
            <span className="font-size_caption">20-08-2017, 4:08 pm</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default NormalActive;
