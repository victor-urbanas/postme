import { Posts } from '../../../imports/api/posts';
import commentService from '../comment/comment-service';

class PostService {

  getAllPublicPosts() {

    return Posts.find({public: true}, {sort: {createdAt: -1}});
  }

  getBestPublicPosts() {

    return Posts.find({public: true}, {sort: {rating: -1}});
  }

  getUserPublicPosts(id) {

    return Posts.find({authorId: id, public: true}, {sort: {createdAt: -1}});
  }

  getUserPrivatePosts(id) {

    return Posts.find({authorId: id, public: false}, {sort: {createdAt: -1}});
  }

  getUserPost(userId, postId) {

    return Posts.findOne({_id: postId, authorId: userId});
  }

  create(post) {
    Posts.insert(post);
  }

  update(id, $set) {
    Posts.update({_id: id}, {$set});
  }

  delete(id) {
    Posts.remove({_id: id});
  }

  get(id) {
    const post = Posts.findOne({_id: id, $or: [{public: true}, {authorId: Meteor.userId()}]});
    post && Object.assign(post, {comments: commentService.getPostComments(id)});

    return post;
  }
}

export default new PostService();
