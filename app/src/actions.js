const uuidV4 = require('uuid/v4');

export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        text,
        votes: 0,
        id: uuidV4()
    }
}

export const EDIT_COMMENT = 'EDIT_COMMENT';
export const editComment = (newText, id) => {
    return {
        type: EDIT_COMMENT,
        newText,
        id
    }
}

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = (id) => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const thumbUpComment = (id) => {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}


export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const thumbDownComment = (id) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

export const CHANGE_NEW_COMMENT_FIELD = 'CHANGE_NEW_COMMENT_FIELD';
export const changeNewCommentField = (text) => {
    return {
        type: CHANGE_NEW_COMMENT_FIELD,
        text
    }
}