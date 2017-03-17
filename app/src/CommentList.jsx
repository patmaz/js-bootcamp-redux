import React from 'react';
import CommentContainer from './CommentContainer';

const CommentList = ({comments, fieldsContent, addComment, changeNewCommentField}) => {
    return (
        <div>
        <ul>{comments.map((comment) => <CommentContainer key={comment.id} {...comment} />)}</ul>
        <form onSubmit={(e) => {
                e.preventDefault();
                addComment(fieldsContent.newCommentInput);
            }} >
            <input type={'text'} value={fieldsContent.newCommentInput} onChange={(e) => changeNewCommentField(e.target.value)}/>
            <input type={'submit'} value={'add'} />
        </form>
        </div>
    );
}

export default CommentList;