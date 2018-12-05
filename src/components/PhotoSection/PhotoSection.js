import React, { Component } from "react";

class PhotoSection extends Component {
  render() {
    const recommend_state = true;
    return (
      <div className="col-md-3 cus_checkbox">
        <div className="cus-check_div">
          <input type="checkbox" className="checkbox__input"></input>
        </div>
        <div className="cus-img_div">
          <img className="cus_image special-indicators__item_default " src="img/girl.png" alt="logo"/>
          <div className="cus-img_middle rounded special-indicators__item_default">
            <div className="cus-img_text">Show details</div>
          </div>
          {recommend_state &&
            <div className="cus-recommend_icon">
              <span className="icon__star cus_star_icon"></span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default PhotoSection;
