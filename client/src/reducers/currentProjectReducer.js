import ACTION from "../actions/actionType";

const initialState = {
    currentProject: [],
    isFetching: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACTION.CURRENT_PROJECT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            };
        }
        case ACTION.CURRENT_PROJECT_RESPONSE: {
            return {
                ...state,
                currentUser: action.currentProject,
                error: null,
                isFetching: false
            };
        }
        case ACTION.CURRENT_PROJECT_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        }
        default: {
            return state;
        }
    }
}
