import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rocket/rockets';
import images from '../../public/images/dev.jpeg';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  return (
    <section className="">
      <div className="">
        <div className="falcon">
          <img src={images} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Rocket;
