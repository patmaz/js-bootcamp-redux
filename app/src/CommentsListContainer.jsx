import {connect} from 'react-redux';
import CommentsList from './CommentList.jsx';
import {addComment, changeNewCommentField} from './actions.js';

const mapStateToProps = state => ({
    comments: state.comments,
    fieldsContent: state.fieldsContent
});

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
    changeNewCommentField: (text) => dispatch(changeNewCommentField(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);