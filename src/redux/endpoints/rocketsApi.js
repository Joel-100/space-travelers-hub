import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const rocketFetch = async () => {
  const response = await axios.get(baseUrl);
  return response.data.map((item) => ({
    id: item.id,
    rockets_name: item.rocket_name,
    description: item.description,
    flickr_images: item.flickr_images[0],
    reserved: false,
  }));
};

export default rocketFetch;
