import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rocket/rockets';
import './style.css';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  console.log(rockets);

  return (
    <div className="container">
      {rockets.map((item) => (
        <div className="rocket-card" key={item.id}>
          <div className="rocket-profile">
            <img src={item.flickr_images} alt="" />
          </div>
          <div className="rocket-description">
            <h1>{item.rockets_name}</h1>
            <p>{item.description}</p>
            <button type="button" className="btn">Reserve Rocket</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Rocket;
