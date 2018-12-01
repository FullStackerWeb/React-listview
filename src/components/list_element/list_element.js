import React, { Component } from "react";
import "./List_element.css";

class List_element extends Component {
  render() {
    var myStyle1 = {
      height: 50,
      backgroundColor: "blue"
    }
    var myStyle2 = {
      height: 50,
      backgroundColor: "green"
    }
    return (
      <div className="content d-flex flex-column">
        <div className="row">
          <div className="col-md-2">
            <h3 className="group-title">
              LIST VIEW - EMPTY STATE
            </h3>
          </div>

          <div className="col-md-10">
            <div className="row special-indicators__content content_bar">
              <div className="col-md-1 cus_checkbox">
                <input type="checkbox" className="checkbox__input"></input>
              </div>
              <div className="col-md-2">
                <img className="cus_image" src="img/girl.png"/>
              </div>
              <div className="col-md-6">
                <div className="row font-size_caption">
                  Everybody good? Plenty of slaves for my robot colony? - Interstellar Everybody good? Plenty of slaves for my robot colony? - Interstellar
                  Everybody good? Plenty of slaves for my robot colony? - InterstellarEverybody good? Plenty of slaves for my robot Everybody good? Plenty of slaves for my robot colony? - Interstellar
                </div>

                <div className="row">
                  <span className="icon__social-instagram mt-4 ml-4">gabriel.alexandru17</span>
                  <span className="icon__likes mt-4 ml-4">30</span>
                  <span className="icon__comments mt-4 ml-4">3</span>
                  <span className="icon__user mt-4 ml-4">120</span>
                  <span className="icon__calendar mt-4 ml-4">20-08-2017, 4:08 pm</span>
                </div>

                <div className="row font-size_caption">
                  collections:
                </div>

                <div className="row">
                  <button type="button" className="btn custom-button custom-button_outline-primary custom-button_outline-primary_hover ml-2">
                    <span className="icon__products mt-4 ml-4"></span>
                    <span className="icon__plus mt-4 ml-4"></span>
                  </button>
                  <button type="button" className="btn custom-button custom-button_outline-primary custom-button_outline-primary_hover ml-2">
                    <span className="icon__collection mt-4 ml-4"></span>
                    <span className="icon__plus mt-4 ml-4"></span>
                  </button>
                </div>
              </div>
              <div className="col-md-2 offset-md-1">
                <ul className="special-indicators__list d-flex flex-column flex-grow-1">
                  <li className="special-indicators__item special-indicators__item_active special-indicators__item_green d-flex align-items-center">
                    <span className="icon__check-big mr-2"></span>
                    <span>Approved</span>
                  </li>
                  <li className="special-indicators__item special-indicators__item_hover d-flex align-items-center">
                    <span className="icon__cross-close mr-2"></span>
                    <span>Reject</span>
                  </li>
                  <li className="special-indicators__item special-indicators__item_default d-flex align-items-center">
                    <span className="icon__copyright mr-2"></span>
                    <span className="text-nowrapw">Get media rights</span>
                  </li>
                  <li className="special-indicators__item special-indicators__item_default d-flex align-items-center">
                    <span className="icon__pin mr-2"></span>
                    <span className="text-nowrapw">Set sticky</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List_element;
