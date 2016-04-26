import { Posts } from '../../../imports/api/posts';

class PostService {

  getAllPublicPosts() {

    return Posts.find({public: true});
  }

  getUserPublicPosts(id) {

    return Posts.find({authorId: id, public: true});
  }

  getUserPrivatePosts(id) {

      return Posts.find({authorId: id, public: false});
  }

  getUserPost(userId, postId) {

    return Posts.findOne({_id: postId, authorId: userId});
  }

  create(post) {
    Posts.insert(post);
  }

  update(id, post) {
    Posts.update({_id: id}, post);
  }

  delete(id) {
    Posts.remove({_id: id});
  }
}

export default new PostService();
