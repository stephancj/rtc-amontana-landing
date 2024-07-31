import PocketBase from 'pocketbase';
import { API_BASE_URL } from '../utils/constants';

const pb = new PocketBase(API_BASE_URL);

export default pb;