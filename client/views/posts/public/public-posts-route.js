import './public-posts.tpl.html';
import PostService from '../../../components/post/post-service';
import _ from 'lodash';

class publicPostRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render('publicPosts');
  }
}

Template.publicPosts.helpers({
  posts() {

    return PostService.getPublicPosts()
  },
});

export default new publicPostRoute();
