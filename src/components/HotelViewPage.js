import React from 'react';
import { getHotelDetails } from '../selectors/hotel-details';
import { connect } from 'react-redux';

export class HotelViewPage extends React.Component {
  render() {
    console.log(this.props.hotelDetails);
    return (
      <div>
        {this.props &&
        this.props.hotelDetails &&
        this.props.hotelDetails.title ? (
          <p>{this.props.hotelDetails.title}</p>
        ) : (
          <p />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    hotelDetails: getHotelDetails(state.hotels, state.filters)
  };
};

export default connect(mapStateToProps)(HotelViewPage);
