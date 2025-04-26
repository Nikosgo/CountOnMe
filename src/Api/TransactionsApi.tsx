import axios from 'axios';
import {TRANSACTION_URL} from "./Constant.tsx"

export const fetchExpensesByUser = (user) => {
  return axios.get(TRANSACTION_URL.FIND_ALL_EXPENSES_BY_USER, {
    params: { user }
  });
};

export const fetchIncomeByUser = (user) => {
  return axios.get(TRANSACTION_URL.FIND_ALL_INCOME_BY_USER, {
    params: { user }
  });
};

export const fetchTop3ExpenseCategories = (user) => {
    return axios.get(TRANSACTION_URL.FIND_TOP_3_EXPENSE_CATEGORY, {
      params: { user }
    });
  };
  