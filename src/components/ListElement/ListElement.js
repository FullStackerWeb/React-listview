import React, { Component } from "react";
import NormalActive     from "../NormalActive/NormalActive";
import PhotoSection     from "../PhotoSection/PhotoSection";
import PhotoDescript    from "../PhotoDescript/PhotoDescript"
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
      collection_btn_state: true
    }
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(this.node.contains(e.target))
      return;
    else
      this.setState({
        assign_products_component: false,
        collection_component: false
      });
  }

  assign_addClick(){
    if(!this.state.assigned_products_component)
      this.setState({assign_products_component: !this.state.assign_products_component});
    this.setState(prevState => ({
      assign_btn_state: !prevState.assign_btn_state,
      assigned_products_component: !prevState.assigned_products_component
    }));
  }

  assign_cancelClick() {
    this.setState(prevState => ({
      assign_products_component: !prevState.assign_products_component
    }));
  }

  collection_addClick() {
    if(!this.state.added_collection_item){
      this.setState(
        {
          added_collection_item: !this.state.added_collection_item,  
          collection_btn_state: !this.state.collection_btn_state
        }
      );
    }
    this.setState(prevState => ({
      collection_component: !prevState.collection_component,
      // added_collection_item: !prevState.added_collection_item
    }));
  }

  collection_cancelClick() {
    this.setState(prevState => ({
      collection_component: !prevState.collection_component
    }));
  }
  
  render() {
    const {assign_products_component, assigned_products_component, collection_component, assign_btn_state, collection_btn_state} = this.state;
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
              <PhotoSection />
              <div className="col-md-6">
                <PhotoDescript />
                {this.state.interactive_div && <Interactive /> }
                <NormalActive />

                <div className="row cus-interactive_bar font-size_caption">
                  { this.state.added_collection_item && <AddedCollection /> }
                  {!collection_btn_state &&
                    <button type="button" data-tip="Collection" onClick ={() => this.setState({ collection_component: !collection_component })} className="btn custom-button_small custom-button_outline-interactive ml-2">
                      <span className="icon__collection mr-1"></span>
                      <span className="icon__plus"></span>
                    </button>
                  }
                </div>

                <div ref={node => this.node = node} className="row cus-interactive_bar cus-button_div">
                  { assign_btn_state &&
                    <button type="button" data-tip="Assign product" onClick ={() => this.setState({ assign_products_component: !assign_products_component })} className="btn custom-button_small custom-button_outline-interactive">
                      <span className="icon__products mr-1"></span>
                      <span className="icon__plus"></span>
                    </button>
                  }
                  { assign_products_component && <AssignProducts addClick={() => this.assign_addClick()} cancelClick={()=>this.assign_cancelClick()} />}                  

                  { collection_btn_state &&
                    <button type="button" data-tip="Collection" onClick ={() => this.setState({ collection_component: !collection_component })} className="btn custom-button_small custom-button_outline-interactive ml-2">
                      <span className="icon__collection mr-1"></span>
                      <span className="icon__plus"></span>
                    </button>
                  }
                  { collection_component && <Collections addClick={() => this.collection_addClick()} cancelClick={() => this.collection_cancelClick()}/> }

                  { this.state.unhealthy_state && <BtnUnhealthy /> }
                </div>
              </div>
              <ActionButtonGroup />
            </div>
            { assigned_products_component && <AssignedProducts /> } 
          </div>
        </div>
        <ReactTooltip />
      </div>
    );
  }
}
export default ListElement;