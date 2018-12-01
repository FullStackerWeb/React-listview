import React, { Component } from "react";
import ReactTooltip from 'react-tooltip'
// import React, { Component } from 'react'
import "./List_element.css";


const $ = window.$;

class List_element extends Component {
  ComponentDidMount(){
    $('[data-toggle="tooltip"]').tooltip()
  }

  render() {
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
              <div className="col-md-3 cus_checkbox">
                <div className="cus-check_div">
                  <input type="checkbox" className="checkbox__input"></input>
                </div>
                <div className="cus-img_div">
                  <img className="cus_image" src="img/girl.png"/>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row font-size_caption">
                  Everybody good? Plenty of slaves for my robot colony? - Interstellar Everybody good? Plenty of slaves for my robot colony? - Interstellar
                  Everybody good? Plenty of slaves for my robot colony? - InterstellarEverybody good? Plenty of slaves for my robot Everybody good? Plenty of slaves for my robot colony? - Interstellar
                </div>

                <div className="row">
                  <span className="icon__comments cus-sucess_comments"></span>
                  <span className="success-message d-flex">
                    Photoshlurp_official was mentioned
                  </span>
                </div>

                <div className="row">
                  <span className="icon__social-instagram">gabriel.alexandru17</span>
                  <span className="icon__likes ml-2">30</span>
                  <span className="icon__comments ml-2">3</span>
                  <span className="icon__user ml-2">120</span>
                  <span className="icon__calendar ml-2">20-08-2017, 4:08 pm</span>
                </div>

                <div className="row font-size_caption">
                  collections:
                  <ul className="select2-selection__rendered">
                    <li className="select2-selection__choice" title="Item #1" data-select2-id="6"><span className="select2-selection__choice__remove" role="presentation">×</span>B&W dresses</li>
                    <li className="select2-selection__choice" title="Item #2" data-select2-id="7"><span className="select2-selection__choice__remove" role="presentation">×</span>Umbrellas</li>
                  </ul>
                </div>

                <div className="row">
                  <p data-tip="Assign product">
                    <button type="button" className="btn custom-button custom-button_outline-primary custom-button_outline-primary_hover ml-2">
                      <span className="icon__products mr-2"></span>
                      <span className="icon__plus mr-2"></span>
                    </button>
                  </p>
                  <p data-tip="Collection">
                    <button type="button" className="btn custom-button custom-button_outline-primary custom-button_outline-primary_hover ml-2">
                      <span className="icon__collection mr-2"></span>
                      <span className="icon__plus mr-2"></span>
                    </button>
                  </p>
                  <p data-tip="Error">
                    <button type="button" className="btn custom-button custom-button_outline-danger custom-button_outline-danger_hover ml-2">
                      <span className="icon__error mr-2"></span>
                      Unhealthy
                    </button>
                  </p>
                  <ReactTooltip />
                </div>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-2 cus_function_div">
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
            
            <div className="row cus_custom-dropdown__footer">
              <div className="cus-assign_div"></div>
                <ul className="select2-selection__rendered cus-collection-bar-ul font-size_tiny">
                  <li className="cus-collection-bar-li" title="Item #1" data-select2-id="6">
                    <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg" className="custom-dropdown__big-image" />
                    Dress Name1
                  </li>
                  <li className="cus-collection-bar-li" title="Item #2" data-select2-id="7">
                    <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg" className="custom-dropdown__big-image" />
                    Umbrellas
                  </li>
                  <li className="cus-collection-bar-li" title="Item #2" data-select2-id="7">
                    <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg" className="custom-dropdown__big-image" />
                    Longer name..
                  </li>
                  <li className="cus-collection-bar-li" title="Item #2" data-select2-id="7">
                    <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg" className="custom-dropdown__big-image" />
                    Other product
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List_element;
