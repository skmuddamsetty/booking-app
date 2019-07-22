import React from 'react';
export const HotelOverviewPage = props => (
  <div className="overview">
    <h1 className="overview__heading">
      {props && props.hotel && props.hotel.title ? (
        <p>{props.hotel.title}</p>
      ) : (
        <p />
      )}
    </h1>
    <div className="overview__stars">
      <img className="overview__icon-star" src="/images/star.svg" />
      <img className="overview__icon-star" src="/images/star.svg" />
      <img className="overview__icon-star" src="/images/star.svg" />
      <img className="overview__icon-star" src="/images/star.svg" />
      <img className="overview__icon-star" src="/images/star.svg" />
    </div>
    <div className="overview__location">
      <img className="overview__icon-location" src="/images/location-pin.svg" />
      <button className="btn-inline">Bay Area, Seattle</button>
    </div>
    <div className="overview__rating">
      <div className="overview__rating-average">9.5</div>
      <div className="overview__rating-count">100 Votes</div>
    </div>
  </div>
);
export default HotelOverviewPage;
