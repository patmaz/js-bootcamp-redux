import {CHANGE_NEW_COMMENT_FIELD} from './actions';

function fieldsContentReducer(state = {}, action) {
    switch(action.type) {
        case CHANGE_NEW_COMMENT_FIELD:
            return {...state, newCommentInput: action.text};
        default: return state;
    }
}

export default fieldsContentReducer;