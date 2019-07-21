import React from 'react';
const DashboardPage = () => (
  <div className="container">
    <div>
      <h1 className="search-bar__heading">Book unique homes and experiences</h1>
    </div>
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
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item">
            <div className="side-nav__item-title">Entire Guesthouse</div>
            <div className="side-nav__item-subtitle">
              Carriage house 600 sq feet
            </div>
            <div className="side-nav__item-plan">
              2 guests<span className="side-nav__item-plan-item">.</span>2
              bedrooms<span className="side-nav__item-plan-item">.</span>2 beds
              <span className="side-nav__item-plan-item">.</span>1 bath
            </div>
            <div className="side-nav__item-features">
              Free parking on Premises
              <span className="side-nav__item-features-item">.</span>Wifi
              <span className="side-nav__item-features-item">.</span>Kitchen
              <span className="side-nav__item-features-item">.</span>Iron
            </div>
          </li>
        </ul>
        <ul className="side-nav">
          <li className="side-nav__item">
            <div className="side-nav__item-title">Entire Guesthouse</div>
            <div className="side-nav__item-subtitle">
              Carriage house 600 sq feet
            </div>
            <div className="side-nav__item-plan">
              2 guests<span className="side-nav__item-plan-item">.</span>2
              bedrooms<span className="side-nav__item-plan-item">.</span>2 beds
              <span className="side-nav__item-plan-item">.</span>1 bath
            </div>
            <div className="side-nav__item-features">
              Free parking on Premises
              <span className="side-nav__item-features-item">.</span>Wifi
              <span className="side-nav__item-features-item">.</span>Kitchen
              <span className="side-nav__item-features-item">.</span>Iron
            </div>
          </li>
        </ul>
        <ul className="side-nav">
          <li className="side-nav__item">
            <div className="side-nav__item-title">Entire Guesthouse</div>
            <div className="side-nav__item-subtitle">
              Carriage house 600 sq feet
            </div>
            <div className="side-nav__item-plan">
              2 guests<span className="side-nav__item-plan-item">.</span>2
              bedrooms<span className="side-nav__item-plan-item">.</span>2 beds
              <span className="side-nav__item-plan-item">.</span>1 bath
            </div>
            <div className="side-nav__item-features">
              Free parking on Premises
              <span className="side-nav__item-features-item">.</span>Wifi
              <span className="side-nav__item-features-item">.</span>Kitchen
              <span className="side-nav__item-features-item">.</span>Iron
            </div>
          </li>
        </ul>
        <div className="legal">
          &copy; 2019 by Booking.com. All rights reserved.
        </div>
      </nav>
      <main className="motel-view">Motel View</main>
    </div>
  </div>
);
export default DashboardPage;
