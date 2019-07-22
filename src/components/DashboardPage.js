import React from 'react';
import SearchResultsPage from './SearchResultsPage';
import HotelViewPage from './HotelViewPage';

const DashboardPage = () => (
  <div className="container">
    <div>
      <h1 className="search-bar__heading">Book unique homes and experiences</h1>
    </div>
    <div className="search-criteria">
      <div className="search-bar__input-group">
        <label htmlFor="searchText" className="search__input-label">
          Where
        </label>
        <input
          type="text"
          className="search__input"
          placeholder="Anywhere"
          name="searchText"
        />
      </div>
      {/* <button className="round-btn">Search</button> */}
    </div>
    <div className="content">
      <SearchResultsPage />
      <main className="hotel-view">
        <HotelViewPage />
      </main>
    </div>
  </div>
);
export default DashboardPage;
