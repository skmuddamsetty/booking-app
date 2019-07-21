import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters';
import { hotelsReducer } from '../reducers/hotels';

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      hotels: hotelsReducer
    })
  );
  return store;
};
