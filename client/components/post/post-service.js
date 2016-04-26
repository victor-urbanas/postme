import { Posts } from '../../../imports/api/posts';

class PstService {

  getAll() {

    return Posts.find({});
  }

  create(post) {
    Posts.insert(post);
  }
}

export default new PstService();
