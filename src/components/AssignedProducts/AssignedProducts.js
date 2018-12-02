import React, { Component } from "react";

class AssignedProducts extends Component {
  render() {
    return(
      <div className="row cus_custom-dropdown__footer">
        <div className="cus-assign_div"></div>
        <ul className="select2-selection__rendered cus-collaction_ul font-size_tiny">
          <li className="cus-collection-bar-li special-indicators__item_default " title="Item #1" data-select2-id="6">
            <p className="cus-tool-tip" data-tip="Dress">
              <img src="img/1.png" className="custom-dropdown__big-image"  alt="logo" />
              <span className="cus-collection_span">Dress Name1</span>
            </p>
          </li>
          <li className="cus-collection-bar-li special-indicators__item_default " title="Item #2" data-select2-id="7">
            <p className="cus-tool-tip" data-tip="Umbrellas">
              <img src="img/2.png" className="custom-dropdown__big-image"  alt="logo" />
              <span className="cus-collection_span">Umbrellas</span>
            </p>
          </li>
          <li className="cus-collection-bar-li special-indicators__item_default " title="Item #3" data-select2-id="7">
            <p className="cus-tool-tip" data-tip="Longer">
              <img src="img/3.png" className="custom-dropdown__big-image" alt="logo" />
              <span className="cus-collection_span">Longer name..</span>
            </p>
          </li>
          <li className="cus-collection-bar-li special-indicators__item_default " title="Item #4" data-select2-id="7">
            <p className="cus-tool-tip" data-tip="Other">
              <img src="img/4.png" className="custom-dropdown__big-image" alt="logo" />
              <span className="cus-collection_span">Other product</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default AssignedProducts;
