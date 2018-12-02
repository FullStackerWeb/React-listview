import React, { Component } from "react";
import ReactTooltip from 'react-tooltip'
import AssignProducts from '../AssignProducts/AssignProducts'
import AssignedProducts from '../AssignedProducts/AssignedProducts'
import "./List_element.css";

class List_element extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       assign_products_component: false,
       assigned_products_component: false
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState() {
    this.setState({data: 'Data updated...'})
  }
  
  render() {
    const { assign_products_component, assigned_products_component } = this.state;
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
                  <img className="cus_image special-indicators__item_default " src="img/girl.png" alt="logo"/>
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
                    <li className="special-indicators__item_default select2-selection__choice" title="Item #1" data-select2-id="6"><span className="select2-selection__choice__remove" role="presentation">×</span>B&W dresses</li>
                    <li className="special-indicators__item_default select2-selection__choice" title="Item #2" data-select2-id="7"><span className="select2-selection__choice__remove" role="presentation">×</span>Umbrellas</li>
                  </ul>
                </div>

                <div className="row cus-interactive_bar cus-button_div">
                  <button type="button" data-tip="Assign product" onClick ={() => this.setState({ assign_products_component: !assign_products_component })} className="btn custom-button_small custom-button_outline-interactive">
                    <span className="icon__products mr-1"></span>
                    <span className="icon__plus"></span>
                  </button>
                  { assign_products_component ? <AssignProducts /> : null }

                  <button type="button" data-tip="Collection" className="btn custom-button_small custom-button_outline-interactive ml-2">
                    <span className="icon__collection mr-1"></span>
                    <span className="icon__plus"></span>
                  </button>

                  <button type="button"  data-tip="Assign product" className="btn cus-remove_btn custom-button_small custom-button_outline-interactive_unhealth">
                    <span className="icon__error mr-2"></span>
                    Unhealthy
                  </button>
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

            { assigned_products_component ? <AssignedProducts /> : null} 
          </div>
        </div>

        <ReactTooltip />
      </div>
    );
  }
}

export default List_element;
