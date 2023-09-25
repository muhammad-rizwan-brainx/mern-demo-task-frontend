import axios from 'axios';

import {LOCAL_APIS} from './../constants'

//  export your instance
export const APIS = axios.create({
  baseURL: `${LOCAL_APIS}`,
});