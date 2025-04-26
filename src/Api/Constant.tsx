const API_BASE_URL = 'http://localhost:8080';
export const TRANSACTIONS_BASE_URL = API_BASE_URL + "/transactions";
export const USERS_BASE_URL = API_BASE_URL + "/users";

export const USER_API = {
    BASE_URL: USERS_BASE_URL,
    FIND_BY_EMAIL: USERS_BASE_URL + "/search/findUserByEmail",
    FIND_BY_NAME: USERS_BASE_URL + "/search/findUserByName",
    CHECK_PASSWORD_URL: USERS_BASE_URL + "/checkUserPassword"
}