import React, { Component } from "react";
import ReactTooltip from 'react-tooltip'
import "./List_element.css";

class List_element extends Component {
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
                  <img className="cus_image" src="img/girl.png" alt="logo"/>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row font-size_caption">
                  Everybody good? Plenty of slaves for my robot colony? - Interstellar Everybody good? Plenty of slaves for my robot colony? - Interstellar
                  Everybody good? Plenty of slaves for my robot colony? - InterstellarEverybody good? Plenty of slaves for my robot Everybody good? Plenty of slaves for my robot colony? - Interstellar
                </div>

                <div className="row cus-interactive_bar">
                  <ul className="cus-special-indicators__list cus-collection-bar-ul d-flexflex-grow-1">
                    <li className="special-indicators__item_default d-flex align-items-center mr-4">    
                      <span className="icon__comments cus-sucess_comments mr-1"></span>
                      <span className="success-message d-flex">Photoshlurp_official was mentioned</span>
                    </li>
                  </ul>
                </div>

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
                    <li className="special-indicators__item_default d-flex align-items-center mr-4">    
                      <span className="icon__user mr-1"></span>
                      <span className="font-size_caption">120</span>
                    </li>
                    <li className="special-indicators__item_default d-flex align-items-center mr-4">    
                      <span className="icon__calendar mr-1"></span>
                      <span className="font-size_caption">20-08-2017, 4:08 pm</span>
                    </li>
                  </ul>
                </div>

                <div className="row cus-interactive_bar font-size_caption">
                  <ul className="select1-selection__rendered cus-collection-bar-ul">
                    <li className="cus-choice_label">Collections:</li>
                    <li className="select2-selection__choice" title="Item #1" data-select2-id="6"><span className="select2-selection__choice__remove" role="presentation">×</span>B&W dresses</li>
                    <li className="select2-selection__choice" title="Item #2" data-select2-id="7"><span className="select2-selection__choice__remove" role="presentation">×</span>Umbrellas</li>
                  </ul>
                </div>

                <div className="row cus-interactive_bar cus-button_div">
                  <p className="cus-button-bar" data-tip="Assign product">
                    <button type="button" className="btn custom-button custom-button_outline-primary custom-button_outline-primary_hover ml-2">
                      <span className="icon__products mr-2"></span>
                      <span className="icon__plus mr-2"></span>
                    </button>
                  </p>
                  <p className="cus-button-bar" data-tip="Collection">
                    <button type="button" className="btn custom-button custom-button_outline-primary custom-button_outline-primary_hover ml-2">
                      <span className="icon__collection mr-2"></span>
                      <span className="icon__plus mr-2"></span>
                    </button>
                  </p>
                  <p className="cus-button-bar" data-tip="Error">
                    <button type="button" className="btn custom-button custom-button_outline-danger custom-button_outline-danger_hover ml-2">
                      <span className="icon__error mr-2"></span>
                      Unhealthy
                    </button>
                  </p>
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
                <ul className="select2-selection__rendered cus-collaction_ul font-size_tiny">
                  <li className="cus-collection-bar-li" title="Item #1" data-select2-id="6">
                    <p className="cus-tool-tip" data-tip="Dress">
                      <img src="img/1.png" className="custom-dropdown__big-image"  alt="logo" />
                      <span className="cus-collection_span">Dress Name1</span>
                    </p>
                  </li>
                  <li className="cus-collection-bar-li" title="Item #2" data-select2-id="7">
                    <p className="cus-tool-tip" data-tip="Umbrellas">
                      <img src="img/2.png" className="custom-dropdown__big-image"  alt="logo" />
                      <span className="cus-collection_span">Umbrellas</span>
                    </p>
                  </li>
                  <li className="cus-collection-bar-li" title="Item #3" data-select2-id="7">
                    <p className="cus-tool-tip" data-tip="Longer">
                      <img src="img/3.png" className="custom-dropdown__big-image" alt="logo" />
                      <span className="cus-collection_span">Longer name..</span>
                    </p>
                  </li>
                  <li className="cus-collection-bar-li" title="Item #4" data-select2-id="7">
                    <p className="cus-tool-tip" data-tip="Other">
                      <img src="img/4.png" className="custom-dropdown__big-image" alt="logo" />
                      <span className="cus-collection_span">Other product</span>
                    </p>
                  </li>
                </ul>
            </div>
          </div>
        </div>

        <ReactTooltip />
      </div>
    );
  }
}

export default List_element;
