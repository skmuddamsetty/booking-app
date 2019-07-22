import React from 'react';
export const HotelDetailPage = props => (
  <div className="detail">
    <div className="description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni natus
        numquam, minima suscipit placeat. Ex earum cum nobis quod quia totam!
        Omnis dolorem rem sit odit quas amet aut!
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni natus
        numquam, minima suscipit placeat.
      </p>
      <ul className="list">
        <li className="list__item">Close to the beach</li>
        <li className="list__item">Breakfast Included</li>
        <li className="list__item">Free airport shuttle</li>
        <li className="list__item">Free wifi in all rooms</li>
        <li className="list__item">Air conditioning and heating</li>
        <li className="list__item">Pets allowed</li>
        <li className="list__item">We speak all languages</li>
        <li className="list__item">Perfect for families</li>
      </ul>
      <div className="recommend">
        <p className="recommend__count">
          Lucy and 3 other friends recommend this hotel.
        </p>
        <p className="recommend__friends">
          <img
            src="/images/user-3.jpg"
            alt="Friend 1"
            className="recommend__photo"
          />
          <img
            src="/images/user-4.jpg"
            alt="Friend 2"
            className="recommend__photo"
          />
          <img
            src="/images/user-5.jpg"
            alt="Friend 3"
            className="recommend__photo"
          />
          <img
            src="/images/user-6.jpg"
            alt="Friend 4"
            className="recommend__photo"
          />
        </p>
      </div>
    </div>
    <div className="user-reviews">
      <figure className="review">
        <blockquote className="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eos
          facere cumque, harum, deleniti nulla suscipit animi molestiae, vel
          beatae doloremque quaerat alias sapiente cupiditate vitae quasi quia
          nemo illum!
        </blockquote>
        <figcaption className="review__user">
          <img
            src="/images/user-1.jpg"
            alt="User 1"
            className="review__photo"
          />
          <div className="review__user-box">
            <p className="review__user-name">Jane Doe</p>
            <p className="review__user-date">June 1 2017</p>
          </div>
          <div className="review__rating">7.8</div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eos
          facere cumque, harum, deleniti nulla suscipit animi molestiae.
        </blockquote>
        <figcaption className="review__user">
          <img
            src="/images/user-2.jpg"
            alt="User 1"
            className="review__photo"
          />
          <div className="review__user-box">
            <p className="review__user-name">Mary Joe</p>
            <p className="review__user-date">December 12 2018</p>
          </div>
          <div className="review__rating">9.2</div>
        </figcaption>
      </figure>
      <button className="btn-inline">
        Show All<span>&rarr;</span>
      </button>
    </div>
  </div>
);
export default HotelDetailPage;
