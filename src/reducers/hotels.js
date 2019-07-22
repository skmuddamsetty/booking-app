import uuid from 'uuid';
// EXPENSES REDUCER
const hotelsReducerDefaultState = [
  {
    title: 'ENTIRE GUESTHOUSE',
    subTitle: 'Carriage house 600 sq feet',
    plan: '2 guests.2 bedrooms.2 beds.1 bath',
    features: 'Free parking on Premises.Wifi.Kitchen.Iron',
    uuid: uuid()
  },
  {
    title: 'private room in house',
    subTitle: 'Carriage house 600 sq feet',
    plan: '2 guests.2 bedrooms.2 beds.1 bath',
    features: 'Free parking on Premises.Wifi',
    uuid: uuid()
  }
];
export const hotelsReducer = (state = hotelsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
