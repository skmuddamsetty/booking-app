import React from 'react';
import { getHotelDetails } from '../selectors/hotel-details';
import { connect } from 'react-redux';
import HotelOverViewPage from '../components/HotelOverviewPage';
import HotelDetailPage from '../components/HotelDetailPage';

export class HotelViewPage extends React.Component {
  render() {
    {
      return this.props.currentuuid !== undefined ? (
        <div>
          <HotelOverViewPage hotel={this.props.hotelDetails} />
          <HotelDetailPage hotel={this.props.hotelDetails} />
        </div>
      ) : (
        <p>Select a Hotel to View Details</p>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    currentuuid: state.filters.currentuuidOfHotel,
    hotelDetails: getHotelDetails(state.hotels, state.filters)
  };
};

export default connect(mapStateToProps)(HotelViewPage);
