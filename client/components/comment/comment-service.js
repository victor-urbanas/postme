import { Comments } from '../../../imports/api/comments';

class CommentService {
  getPostComments(postId) {
    
    return Comments.find({postId});
  }

  create(comment) {
    Comments.insert(comment);
  }
}

export default new CommentService();
