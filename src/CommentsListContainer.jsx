import {connect} from 'react-redux';
import CommentsList from './CommentList.jsx';
import {addComment, thumbUpComment, thumbDownComment, removeComment} from './actions.js';

import {} from './actions'

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id)),
    removeComment: (id) => dispatch(removeComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);