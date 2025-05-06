// uncomment to test locally
// const API_BASE_URL = 'http://localhost:8080';
const API_TRANSACTIONS_BASE_URL = "http://52.77.224.75:8080"
const API_USERS_BASE_URL = "http://52.77.224.75:8081"
export const TRANSACTIONS_BASE_URL = API_TRANSACTIONS_BASE_URL + "/transactions";
export const USERS_BASE_URL = API_USERS_BASE_URL + "/users";

export const USER_API = {
    BASE_URL: USERS_BASE_URL,
    FIND_BY_EMAIL: USERS_BASE_URL + "/search/findUserByEmail",
    FIND_BY_NAME: USERS_BASE_URL + "/search/findUserByName",
    CHECK_PASSWORD_URL: USERS_BASE_URL + "/checkUserPassword"
};

export const TRANSACTION_URL = {
    BASE_URL: TRANSACTIONS_BASE_URL,
    FIND_TRANSACTION_BY_USER_TYPE_CATEGORY_AMOUNT: TRANSACTIONS_BASE_URL + "/search/findByUserAndTypeAndCategoryAndAmount",
    FIND_ALL_EXPENSES_BY_USER: TRANSACTIONS_BASE_URL + "/search/findExpensesByUser",
    FIND_ALL_INCOME_BY_USER: TRANSACTIONS_BASE_URL + "/search/findIncomeByUser",
    FIND_ALL_TRANSACTIONS_BY_USER: TRANSACTIONS_BASE_URL + "/search/findTransactionsByUser",
    FIND_TOP_3_EXPENSE_CATEGORY: TRANSACTIONS_BASE_URL + "/getTopExpensesCategoryInMonth",
    FIND_TOP_3_INCOME_CATEGORY: TRANSACTIONS_BASE_URL + "/getTopIncomeCategoryInMonth",
    TRANSACTION_TODAY: TRANSACTIONS_BASE_URL + "/transactionsToday",
    TRANSACTION_WEEK: TRANSACTIONS_BASE_URL + "/transactionsWeek",
    TRANSACTION_MONTH: TRANSACTIONS_BASE_URL + "/transactionsMonth"
};

export const CONVERSION_URL = "/api/exchange-rate";