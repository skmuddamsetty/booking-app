import React from 'react';
const SearchResultItem = () => (
  <li className="side-nav__item">
    <div className="side-nav__item-title">Entire Guesthouse</div>
    <div className="side-nav__item-subtitle">Carriage house 600 sq feet</div>
    <div className="side-nav__item-plan">
      2 guests<span className="side-nav__item-plan-item">.</span>2 bedrooms
      <span className="side-nav__item-plan-item">.</span>2 beds
      <span className="side-nav__item-plan-item">.</span>1 bath
    </div>
    <div className="side-nav__item-features">
      Free parking on Premises
      <span className="side-nav__item-features-item">.</span>Wifi
      <span className="side-nav__item-features-item">.</span>Kitchen
      <span className="side-nav__item-features-item">.</span>Iron
    </div>
  </li>
);
export default SearchResultItem;
