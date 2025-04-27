import axios from 'axios';
import {USER_API} from "./Constant.tsx"

export const fetchAllUsers = () => {
    return axios.get(USER_API.BASE_URL);
};

export const fetchUserByEmail = (email) => {
    return axios.get(USER_API.FIND_BY_EMAIL, {
        params: { email }
    });
};

export const fetchUserByName = (name) => {
    return axios.get(USER_API.FIND_BY_NAME, {
        params: { name }
    });
  };

  export const checkUserPassword = (email, password) => {
    return axios.get(USER_API.CHECK_PASSWORD_URL, {
        params: { email, password }
    });
  };
  