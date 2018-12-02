import React, { Component } from "react";

class AssignProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        assign_cancel: false,
        all_products:[
          {
            "id":0,
            "name":"Balinese",
            "url":"https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2734_balinese-460x290-460x290.jpg"
          },
          {
            "id":1,
            "name":"Bengal",
            "url":"https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2706_bengal-cat-breed-picture.jpg"
          },
          {
            "id":2,
            "name":"Birman",
            "url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2708_birman-460x290-460x290.jpg"
          },
          {
            "id":3,
            "name":"Bombay",
            "url":"https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2756_Bombay-cat-breed.jpg"
          },
          {
            "id":4,
            "name":"British Shorthair",
            "url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2744_british-shorthair-460x290-460x290.jpg"
          },
          {
            "id":5,
            "name":"Burmese",
            "url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2688_burmese-cat-breed-picture.jpg"
          },
          {
            "id":6,
            "name":"Burmilla",
            "url":"https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2760_burmilla-460x290-460x290.jpg"
          }
        ],
        assigned_products:[
          {
            "id": 0,
            "name": "Chartreux",
            "url": "https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg"
          },
          {
            "id": 1,
            "name": "Chinese Li Hua",
            "url": "https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2758_chinese-li-460x290-460x290.jpg"
          },
          {
            "id": 2,
            "name": "Colorpoint Shorthair",
            "url": "https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2732_colorpoint-shorthair-460x290-460x290.jpg"
          },
          {
            "id": 3,
            "name": "Cornish Rex",
            "url": "https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2696_cornish-rex-460x290-460x290.jpg"
          },
          {
            "id": 4,
            "name": "Cymric",
            "url": "https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2690_cymrc-460x290-460x290.jpg"
          },
        ]
    }
  };

  // dismiss(){
  //   this.props.cancelClick;
  //   this.setState({assign_cancel: true});
  // }

  render() {
    if(this.state.assign_cancel){
      return null;
    }
    else{
      return(
        <div className="dropdown-menu custom-dropdown__menu d-block position-static cus-assign_bar">
          <div className="d-flex">
            <div>
              <div className="custom-dropdown__input_container custom-dropdown__input_container_wide p-1">
                <div className="position-relative">
                    <input type="text" className="w-100" placeholder="Type to filter product list..." />
                    <span className="input_icon input_icon-right icon__search"></span>
                </div>
              </div>
  
              <div className="custom-dropdown__scroll-container">
                {this.state.all_products.map((product, i) => 
                  <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center" key={i}>
                    <img src={product.url} className="custom-dropdown__big-image" alt="assign-sel" />
                    <span className="flex-grow-1 ml-3">{product.name}</span>
                  </button>
                )}
              </div>
            </div>
  
            <div>
              <div className="custom-dropdown__header custom-dropdown__header_wide px-3">
                Is it one of these?
              </div>
  
              <div className="custom-dropdown__scroll-container">
                {this.state.assigned_products.map((product, i) => 
                  <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center" key={i}>
                    <img src={product.url} className="custom-dropdown__big-image" alt="assign-sel" />
                    <span className="flex-grow-1 ml-3">{product.name}</span>
                  </button>
                )}
              </div>
            </div>
  
          </div>
  
          <div className="custom-dropdown__footer d-flex justify-content-end">
            <button type="button" onClick = {this.props.cancelClick} className="custom-dropdown__footer-button custom-dropdown__footer-button_default">
                Cancel
            </button>
            <button type="button" onClick = {this.props.addClick} className="custom-dropdown__footer-button custom-dropdown__footer-button_action ml-3">
                Add selected
            </button>
          </div>
  
        </div>
      );
    }
  }
}

export default AssignProducts;
