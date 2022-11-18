import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets, toggleReservation } from '../redux/rocket/rockets';
import './style.css';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const reserveRocket = (id) => {
    dispatch(toggleReservation(id));
  };

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  return (
    <div className="rocket-container">
      {rockets.map((item) => (
        <div className="rocket-card" key={item.id}>
          <div className="rocket-profile">
            <img src={item.flickr_images} alt="" />
          </div>
          <div className="rocket-description">
            <h1>{item.rockets_name}</h1>
            <p>
              {item && item.reserved && <span className="reserved-badge">Reserved</span>}
              {item.description}
            </p>
            {item.reserved ? <button type="button" className="cancel-btn" onClick={() => reserveRocket(item.id)}>Cancel Reservation</button> : <button type="button" className="btn" onClick={() => reserveRocket(item.id)}>Reserve Rocket</button>}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Rocket;
