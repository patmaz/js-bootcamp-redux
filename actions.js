function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        votes: 0;
        id: uuid.v4()
    }
}
const boundAddComment = text => dispatch(addComment(text));

function editComment(newText, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
const boundEditComment = (newText, id) => dispatch(editComment(newText, id));

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
const boundRemoveComment = id => dispatch(removeComment(id));

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}
const boundThumbUpComment = (id, rate) => dispatch(thumbUpComment(id));

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}
const boundThumbDownComment = (id, rate) => dispatch(thumbDownComment(id));

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';