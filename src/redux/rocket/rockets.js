import rocketFetch from '../endpoints/rocketsApi';

const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const TOGGLE_RESERVATION = 'rockets/TOGGLE_RESERVATION';

const initialState = [];

const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const toggleReservation = (payload) => ({
  type: TOGGLE_RESERVATION,
  payload,
});

export const fetchAllRockets = () => async (dispatch) => {
  const response = await rocketFetch();
  dispatch(fetchRockets(response));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;

    case TOGGLE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });

    default: return state;
  }
};

export default rocketReducer;
