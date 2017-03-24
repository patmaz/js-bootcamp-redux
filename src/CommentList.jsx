import React from 'react';
import Comment from './Comment';

const CommentList = ({comments, addComment, thumbUpComment, thumbDownComment, removeComment}) => {
    let textInput = null;
    return (
        <div>
        <ul>{comments.map((comment) => <Comment
                key={comment.id}
                {...comment}
                thumbUpComment={thumbUpComment}
                thumbDownComment={thumbDownComment}
                removeComment={removeComment} />)}</ul>
        <form onSubmit={(e) => {
                e.preventDefault();
                addComment(textInput.value);
            }} >
            <input type={'text'} ref={(input) => { textInput = input; }} />
            <input type={'submit'} value={'add'} />
        </form>
        </div>
    );
}

export default CommentList;