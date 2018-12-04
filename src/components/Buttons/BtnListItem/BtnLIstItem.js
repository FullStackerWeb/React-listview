import React, { Component } from "react";

class BtnListItem extends Component {
  constructor(props){
    super(props);
    this.state ={
      selected: false
    }
  }

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
    this.props.onClick(this.props.product.id, this.state.selected);
  }

  render() {
    const { product } = this.props;
    const { selected } = this.state;
    const btnClass = `dropdown-item custom-dropdown__item custom-dropdown__item_${selected?'selected':'default'} d-flex align-items-center`;

    return (
      <button type="button" onClick={this.handleClick} className={btnClass}>
        <img src={product.url} className="custom-dropdown__big-image" alt="assign-sel" />
        <span className="flex-grow-1 ml-3">{ this.props.product.name }</span>
        { selected && <span className="icon__check"></span> }
      </button>
    );
  }
}

export default BtnListItem;
