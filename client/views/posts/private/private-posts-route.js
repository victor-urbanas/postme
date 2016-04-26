import './private-posts.tpl.html';
import PostService from '../../../components/post/post-service';
import UserService from '../../../components/user/user-service';
import _ from 'lodash';

class privatePostRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render('privatePosts');
  }
}

Template.privatePosts.helpers({
  posts() {

    return PostService.getUserPosts(Meteor.userId())
  },
});

export default new privatePostRoute();
