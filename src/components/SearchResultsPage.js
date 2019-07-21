import React from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';

const SearchResultsPage = props => (
  <nav className="sidebar">
    <ul className="side-nav">
      {props.hotels.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Results</span>
        </div>
      ) : (
        props.hotels.map(hotel => {
          return <SearchResultItem key={hotel.id} {...hotel} />;
        })
      )}
    </ul>
    <div className="legal">
      &copy; 2019 by Booking.com. All rights reserved.
    </div>
  </nav>
);
const mapStateToProps = state => {
  return {
    hotels: state.hotels
  };
};

export default connect(mapStateToProps)(SearchResultsPage);
