import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

function reducerComments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }, ...state];
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.comments.map((comment) => {
                if (comment.id === action.id) {
                    return {
                        text: action.text,
                        id: comment.id,
                        votes: comment.votes
                    };
                }
                return comment;
            });
        case THUMB_UP_COMMENT:
            return state.comments.map((comment) => {
                if (comment.id === action.id) {
                    return {
                        text: comment.text,
                        id: comment.id,
                        votes: comment.votes++
                    };
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.comments.map((comment) => {
                if (comment.id === action.id) {
                    return {
                        text: comment.text,
                        id: comment.id,
                        votes: comment.votes--
                    };
                }
                return comment;
            });
        default: return state;
    }
}

export default reducerComments;