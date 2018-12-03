import React, { Component } from "react";
import Collections      from '../Collections/Collections';
import Interactive      from '../Interactive/Interactive';
import ReactTooltip     from 'react-tooltip';
import BtnUnhealthy     from '../Buttons/BtnUnhealthy/BtnUnhealthy';
import AssignProducts   from '../AssignProducts/AssignProducts';
import AddedCollection  from '../AddedCollection/AddedCollection';
import AssignedProducts from '../AssignedProducts/AssignedProducts';
import ActionButtonGroup from "../ActionButtonGroup/ActionButtonGroup";
import "./ListElement.css";

class ListElement extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       assign_products_component: false,
       assigned_products_component: false,
       collection_component: false,
       added_collection_item: false,
       interactive_div: true,
       unhealthy_state: true,
       assign_btn_state: true,
       collection_btn_state: true,
       recommend_state: true
    }
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(this.node.contains(e.target)) {
      return;
    }
    else{
      this.setState({
        assign_products_component: false,
        collection_component: false
      });
    }
    // this.handleClickOutside()
  }

  assign_addClick(){
    this.setState(prevState => ({
      assign_btn_state: !prevState.assign_btn_state,
      assign_products_component: !prevState.assign_products_component,
      assigned_products_component: !prevState.assigned_products_component
    }));
  }

  assign_cancelClick() {
    this.setState(prevState => ({
      assign_products_component: !prevState.assign_products_component
    }));
  }

  collection_addClick() {
    this.setState(prevState => ({
      collection_btn_state: !prevState.collection_btn_state,
      collection_component: !prevState.collection_component,
      added_collection_item: !prevState.added_collection_item
    }));
  }

  collection_cancelClick() {
    this.setState(prevState => ({
      collection_component: !prevState.collection_component
    }));
  }
  
  render() {
    const {assign_products_component, assigned_products_component, collection_component, assign_btn_state,
      recommend_state, collection_btn_state} = this.state;
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
                  <div className="cus-img_middle rounded">
                    <div className="cus-img_text">Show details</div>
                  </div>
                  {/* recommend part :: recommend_state is variable for check this photo is recommending  */}
                  {recommend_state ? 
                    <div className="cus-recommend_icon">
                      <span className="icon__star cus_star_icon"></span>
                    </div>
                    :null
                  }
                </div>
              </div>

              <div className="col-md-6">
                <div className="row font-size_caption">
                  Everybody good? Plenty of slaves for my robot colony? - Interstellar Everybody good? Plenty of slaves for my robot colony? - Interstellar
                  Everybody good? Plenty of slaves for my robot colony? - InterstellarEverybody good? Plenty of slaves for my robot Everybody good? Plenty of slaves for my robot colony? - Interstellar
                </div>

                <div className="row cus-interactive_bar">
                  {this.state.interactive_div ? <Interactive /> : null}
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

                <div className="row cus-interactive_bar font-size_caption">
                  { this.state.added_collection_item ? <AddedCollection /> : null}
                  {collection_btn_state ? null
                    : <button type="button" data-tip="Collection" onClick ={() => this.setState({ collection_component: !collection_component })} className="btn custom-button_small custom-button_outline-interactive ml-2">
                        <span className="icon__collection mr-1"></span>
                        <span className="icon__plus"></span>
                      </button>
                  }
                </div>

                <div ref={node => this.node = node} className="row cus-interactive_bar cus-button_div">
                  { assign_btn_state ? 
                    <button type="button" data-tip="Assign product" onClick ={() => this.setState({ assign_products_component: !assign_products_component })} className="btn custom-button_small custom-button_outline-interactive">
                      <span className="icon__products mr-1"></span>
                      <span className="icon__plus"></span>
                    </button>
                    : null
                  }
                  { assign_products_component ? <AssignProducts addClick={() => this.assign_addClick()} cancelClick={()=>this.assign_cancelClick()} /> : null }
                  
                  <div>
                    { collection_btn_state ? 
                      <button type="button" data-tip="Collection" onClick ={() => this.setState({ collection_component: !collection_component })} className="btn custom-button_small custom-button_outline-interactive ml-2">
                        <span className="icon__collection mr-1"></span>
                        <span className="icon__plus"></span>
                      </button>
                      : null
                    }
                    { collection_component ? <Collections addClick={() => this.collection_addClick()} cancelClick={() => this.collection_cancelClick()}/> : null }
                  </div>

                  { this.state.unhealthy_state ? <BtnUnhealthy /> : null}
                </div>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-2 cus_function_div">
                <ActionButtonGroup />
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

export default ListElement;