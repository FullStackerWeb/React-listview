import React, { Component } from "react";

class BtnAssignedItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            item_selection: false,
        }
    }

    set_state_btn(){
        this.setState(prevState => ({
            item_selection: !prevState.item_selection
        }));
    }

    render() {
        return (
            <li onClick={() => this.set_state_btn()} className="cus-collection-bar-li special-indicators__item_default">
                <img src={this.props.assignedItem.img_url} className="custom-dropdown__big-image"  alt="logo" data-tip={this.props.assignedItem.tooltip}/>
                <span className="cus-collection_span">{this.props.assignedItem.title}</span>
                { this.state.item_selection ? 
                    <span className="error-message d-flex cus-close_btn">
                        <span className="icon__cross-close rounded"></span>
                    </span>
                    : null
                }
            </li>
        );
    }
}

export default BtnAssignedItem;
