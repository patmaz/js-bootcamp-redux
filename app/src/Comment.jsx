import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) => {
    return (<li>{text} <span>votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>ok</button>
        <button onClick={() => thumbDownComment(id)}>ble</button>
        <button onClick={() => removeComment(id)}>remove</button>
    </li>);
}

export default Comment;