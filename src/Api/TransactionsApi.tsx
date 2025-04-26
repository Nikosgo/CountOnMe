import axios from 'axios';
import {TRANSACTIONS_BASE_URL} from "./Constant.tsx"

export const fetchExpensesByUser = (user) => {
  return axios.get(`${TRANSACTIONS_BASE_URL}/search/findExpensesByUser`, {
    params: { user }
  });
};

export const fetchIncomeByUser = (user) => {
  return axios.get(`${TRANSACTIONS_BASE_URL}/search/findIncomeByUser`, {
    params: { user }
  });
};
