import axios from 'axios';
import {TRANSACTION_URL} from "./Constant.tsx"

export const postNewTransaction = async (transaction) => {
    try {
        const postResponse = await axios.post(TRANSACTION_URL.BASE_URL, transaction, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const getResponse = await axios.get(TRANSACTION_URL.FIND_TRANSACTION_BY_USER_TYPE_CATEGORY_AMOUNT, {
            params: {
                user: transaction.user,
                type: transaction.type,
                category: transaction.category,
                amount: transaction.amount
            }
        });

        console.log(getResponse.data._embedded.transactions.length);
        // Check the response to determine success
        if (getResponse.data._embedded.transactions.length === 0) {
            return false; // Transaction doesn't exist
        } else {
            return true; // Transaction exists
        }
    }
    catch (error){
        console.error('Error posting transaction:', error);
        return false;
    }
};

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