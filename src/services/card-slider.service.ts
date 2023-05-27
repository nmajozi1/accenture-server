import axios from 'axios';
import { url } from '../../config/config.json';

export const getListSlides = async () => {
  try {
    return await axios.get(url);
  } catch (error) {
    throw new Error('Unable to retrieve the slide information.')
  }
}