import { Action } from "./actions";

const initialState = {
    redditLinks: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.LoadLinks:
            return {
                ...state,
                redditLinks: [action.payload, ...state.redditLinks],
            }
        default:
            return state;
    }
}

export default reducer;