import {CHANGE_NEW_COMMENT_FIELD} from './actions';

const initialState = {
    newCommentInput: ''
}

function fieldsContentReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_NEW_COMMENT_FIELD:
            return {...state, newCommentInput: action.text};
        default: return state;
    }
}

export default fieldsContentReducer;