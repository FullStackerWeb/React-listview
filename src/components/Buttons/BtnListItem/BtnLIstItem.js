import React, { Component } from "react";

class BtnListItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            item_selection: false,
            selected_css: "dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center",
            non_selected_css: "dropdown-item custom-dropdown__item custom-dropdown__item_selected d-flex align-items-center"
        }
    }

    set_state_btn(){
        this.setState(prevState => ({
            item_selection: !prevState.item_selection
        }));
    }

    render() {
        return (
            <button type="button" onClick={() => this.set_state_btn()} className={this.state.selected_css}>
                <img src={this.props.product.url} className="custom-dropdown__big-image" alt="assign-sel" />
                <span className="flex-grow-1 ml-3">{this.props.product.name}</span>
                {this.state.item_selection ? <span className="icon__check"></span> : null}
            </button>
        );
    }
}

export default BtnListItem;
