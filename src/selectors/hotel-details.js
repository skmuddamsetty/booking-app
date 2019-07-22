export const getHotelDetails = (hotels, { currentuuidOfHotel }) => {
  const result = hotels.filter(hotel => hotel.uuid === currentuuidOfHotel);
  return result[0];
};
