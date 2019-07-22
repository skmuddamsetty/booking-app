import React from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';

export class SearchResultsPage extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          {this.props.hotels.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Results</span>
            </div>
          ) : (
            this.props.hotels.map(hotel => {
              return <SearchResultItem key={hotel.uuid} {...hotel} />;
            })
          )}
        </ul>
        <div className="legal">
          &copy; 2019 by Booking.com. All rights reserved.
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    hotels: state.hotels
  };
};

export default connect(mapStateToProps)(SearchResultsPage);
