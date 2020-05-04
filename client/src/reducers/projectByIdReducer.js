import ACTION from "../actions/actionType";

const initialState = {
    projects: [],
    isFetching: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACTION.PROJECT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            };
        }
        case ACTION.PROJECT_RESPONSE: {
            return {
                ...state,
                projects: action.projects,
                error: null,
                isFetching: false
            };
        }
        case ACTION.PROJECT_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        }

        case ACTION.ONE_PROJECT_RESPONSE: {
            const projects = [...state.projects];
            const index = projects.findIndex( (u) => u.id === action.project.id );
            if(index === -1) {
                projects.push(action.project);
            } else {
                projects[index] = action.project;
            }
            return {
                ...state,
                projects,
                error: null,
                isFetching: false
            };
        }
        default: {
            return state;
        }
    }
}
