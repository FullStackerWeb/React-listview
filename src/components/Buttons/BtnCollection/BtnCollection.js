import React, { Component } from "react";

class BtnCollection extends Component {
  constructor(props){
    super(props);
    this.state ={
      itemSelection: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      itemSelection: !prevState.itemSelection
    }));
    if(!this.state.itemSelection)
      this.props.onClick(this.props.collection, true);
    else
      this.props.onClick(this.props.collection, false);
  }

  render() {
    const {itemSelection} = this.state;
    const {collection} = this.props;
    const btnClass = `dropdown-item custom-dropdown__item custom-dropdown__item_${itemSelection?'selected':'default'} d-flex align-items-center`
    return (
      <button type="button" onClick={this.handleClick} className={btnClass}>
        <span className="flex-grow-1 ml-3">{collection.name}</span>
        {itemSelection && <span className="icon__check"></span>}
      </button>
    );
  }
}

export default BtnCollection;
