import React from 'react';
import { connect } from 'react-redux';
import { setUuid } from '../actions/filters';

const SearchResultItem = ({
  dispatch,
  uuid,
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
    <button onClick={() => dispatch(setUuid(uuid))} className="btn">
      View Detail
    </button>
  </li>
);

export default connect()(SearchResultItem);
