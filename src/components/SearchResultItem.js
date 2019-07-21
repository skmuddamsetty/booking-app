import React from 'react';
const SearchResultItem = ({
  dispatch,
  id,
  title,
  subTitle,
  features,
  plan
}) => (
  <li className="side-nav__item">
    <div className="side-nav__item-title">{title}</div>
    <div className="side-nav__item-subtitle">{subTitle}</div>
    <div className="side-nav__item-plan">{plan}</div>
    <div className="side-nav__item-features">{features}</div>
  </li>
);
export default SearchResultItem;
