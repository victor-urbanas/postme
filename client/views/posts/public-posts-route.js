import PostService from '../../components/post/post-service';
import _ from 'lodash';

class PublicPostsRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render('posts');
  }
}

Template.posts.helpers({
  posts() {

    return PostService.getPublicPosts()
  },
});

export default new PublicPostsRoute();
