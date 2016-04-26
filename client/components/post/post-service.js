import { Posts } from '../../../imports/api/posts';

class PostService {

  getAll() {

    return Posts.find({});
  }

  getPublicPosts() {

    return Posts.find({public: true});
  }

  getUserPosts(id) {

      return Posts.find({authorId: id});
  }

  create(post) {
    Posts.insert(post);
  }
}

export default new PostService();
