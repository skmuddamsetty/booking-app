import uuid from 'uuid';
// EXPENSES REDUCER
const hotelsReducerDefaultState = [
  {
    title: 'ENTIRE GUESTHOUSE',
    subTitle: 'Carriage house 600 sq feet',
    plan: '2 guests.2 bedrooms.2 beds.1 bath',
    features: 'Free parking on Premises.Wifi.Kitchen.Iron',
    id: uuid()
  },
  {
    title: 'ENTIRE GUESTHOUSE',
    subTitle: 'Carriage house 600 sq feet',
    plan: '2 guests.2 bedrooms.2 beds.1 bath',
    features: 'Free parking on Premises.Wifi',
    id: uuid()
  }
];
export const hotelsReducer = (state = hotelsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
