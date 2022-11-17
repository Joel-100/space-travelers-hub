import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchAllRockets } from '../redux/rockets/rockets';

const Rockets = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteARocket(rocket.item_id));
  };

  return (
    <div>
      <h1>All Rockets</h1>
    </div>
  );
};

export default Rocket;
