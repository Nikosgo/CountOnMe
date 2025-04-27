import axios from 'axios';
import {TRANSACTION_URL} from "./Constant.tsx"

export const fetchTransactionsByUser = (user) => {
    return axios.get(TRANSACTION_URL.FIND_ALL_TRANSACTIONS_BY_USER, {
        params: { user }
    });
};

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

export const fetchTop3IncomeCategories = (user) => {
    return axios.get(TRANSACTION_URL.FIND_TOP_3_INCOME_CATEGORY, {
        params: { user }
    });
};

export const fetchTransactionsToday = (user) => {
    return axios.get(TRANSACTION_URL.TRANSACTION_TODAY, {
        params: { user }
    });
};

export const fetchTransactionsWeek = (user) => {
    return axios.get(TRANSACTION_URL.TRANSACTION_WEEK, {
        params: { user }
    });
};

export const fetchTransactionsMonth = (user) => {
    return axios.get(TRANSACTION_URL.TRANSACTION_MONTH, {
        params: { user }
    });
};