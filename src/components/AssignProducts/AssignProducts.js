import React, { Component } from "react";

class AssignProducts extends Component {
  render() {
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
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default">
                  <img src="https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2734_balinese-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Balinese</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2706_bengal-cat-breed-picture.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Bengal</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_selected">
                  <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2708_birman-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Birman</span>
                  <span className="icon__check"></span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2756_Bombay-cat-breed.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Bombay</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2744_british-shorthair-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">British Shorthair</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2688_burmese-cat-breed-picture.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Burmese</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2760_burmilla-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Burmilla</span>
              </button>
            </div>

          </div>

          <div>

            <div className="custom-dropdown__header custom-dropdown__header_wide px-3">
              Is it one of these?
            </div>

            <div className="custom-dropdown__scroll-container">
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Chartreux</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2758_chinese-li-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Chinese Li Hua</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2732_colorpoint-shorthair-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Colorpoint Shorthair</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2696_cornish-rex-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Cornish Rex</span>
              </button>
              <button type="button" className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center">
                  <img src="https://cdn2-www.cattime.com/assets/uploads/2011/12/file_2690_cymrc-460x290-460x290.jpg" className="custom-dropdown__big-image" alt="assign-sel" />
                  <span className="flex-grow-1 ml-3">Cymric</span>
              </button>
            </div>

          </div>

        </div>

        <div className="custom-dropdown__footer d-flex justify-content-end">
          <button type="button" className="custom-dropdown__footer-button custom-dropdown__footer-button_default">
              Cancel
          </button>
          <button type="button" className="custom-dropdown__footer-button custom-dropdown__footer-button_action ml-3">
              Add selected
          </button>
        </div>
        
      </div>
    );
  }
}

export default AssignProducts;
