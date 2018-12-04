import React, { Component } from "react";

class ActionButtonGroup extends Component {
  constructor(){
    super();
    this.state= {
      approved_state: false,
      rejected_state: false,
      media_state: false,
      sticky_state: false,
      normal_state: "special-indicators__item d-flex align-items-center",
      default_css: " special-indicators__item_default",
      active_css: " special-indicators__item_active",
      approve_css: " special-indicators__item_green",
      reject_css: " special-indicators__item_red",
      media_css: " special-indicators__item_purple",
      sticky_css: " special-indicators__item_brown"
    }
  }

  click_approve() {
    if(this.state.rejected_state)
      this.setState(prevState => ({
        approved_state: !prevState.approved_state,
        rejected_state: !prevState.rejected_state
      }));
    else
      this.setState(prevState => ({
        approved_state: !prevState.approved_state
      }));
  }

  click_reject(){
    if(this.state.approved_state)
      this.setState(prevState => ({
        approved_state: !prevState.approved_state,
        rejected_state: !prevState.rejected_state
      }));
    else
      this.setState(prevState => ({
        rejected_state: !prevState.rejected_state
      }));
  }

  click_media(){
    this.setState(prevState => ({
      media_state: !prevState.media_state
    }));
  }

  click_sticky(){
    this.setState(prevState => ({
      sticky_state: !prevState.sticky_state
    }));
  }

  render() {
    const {approve_css, default_css, normal_state, reject_css, media_css, sticky_css, approved_state, active_css, rejected_state,
      media_state, sticky_state} = this.state;
    return (
      <div className="col-md-2 offset-md-1 cus_function_div">
        <ul className="special-indicators__list d-flex flex-column flex-grow-1">
          <li onClick={()=>this.click_approve()} className={approved_state ? normal_state + active_css + approve_css : normal_state + default_css}>
            <span className="icon__check-big mr-2"></span>
            <span>Approved</span>
          </li>
          <li onClick={()=>this.click_reject()} className={rejected_state ? normal_state + active_css + reject_css : normal_state + default_css}>
            <span className="icon__cross-close mr-2"></span>
            <span>Reject</span>
          </li>
          <li onClick={()=>this.click_media()} className={media_state ? normal_state + active_css + media_css : normal_state + default_css}>
            <span className="icon__copyright mr-2"></span>
            <span className="text-nowrapw">{!media_state?"Get media rights":"Got media rights"}</span>
          </li>
          <li onClick={()=>this.click_sticky()} className={sticky_state ? normal_state + active_css + sticky_css : normal_state + default_css}>
            <span className="icon__pin mr-2"></span>
            <span className="text-nowrapw">Set sticky</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ActionButtonGroup;
