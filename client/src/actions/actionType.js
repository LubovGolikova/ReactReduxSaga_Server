export default {
    //Action types
    FETCH_ALL_USERS: "FETCH_ALL_USERS",
    FETCH_USER_BY_ID: "FETCH_USER_BY_ID",
    CREATE_ACCOUNT: "CREATE_ACCOUNT",
    DELETE_USER: "DELETE_USER",

    FETCH_ALL_PROJECT: "FETCH_ALL_PROJECT",
    FETCH_PROJECT_BY_ID: "FETCH_PROJECT_BY_ID",
    CREATE_PROJECT: "CREATE_PROJECT",

    //Reducers types
    USERS_REQUEST: "USERS_REQUEST",
    USERS_RESPONSE: "USERS_RESPONSE",
    ONE_USER_RESPONSE: "ONE_USER_RESPONSE",
    USERS_ERROR: "USERS_ERROR",
    DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
    DELETE_USER_ERROR: "DELETE_USER_ERROR",

    PROJECT_REQUEST: "PROJECT_REQUEST",
    PROJECT_ERROR: "PROJECT_ERROR",
    PROJECT_RESPONSE: "PROJECT_RESPONSE",
    ONE_PROJECT_RESPONSE: "ONE_PROJECT_RESPONSE",

    CURRENT_USER_REQUEST: "CURRENT_USER_REQUEST",
    CURRENT_USER_RESPONSE: "CURRENT_USER_RESPONSE",
    CURRENT_USER_ERROR: "CURRENT_USER_ERROR",


    CURRENT_PROJECT_REQUEST:"CURRENT_PROJECT_REQUEST",
    CURRENT_PROJECT_RESPONSE: "CURRENT_PROJECT_RESPONSE",
    CURRENT_PROJECT_ERROR: "CURRENT_PROJECT_ERROR"

};
