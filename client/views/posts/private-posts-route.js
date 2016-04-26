import PostService from '../../components/post/post-service';
import UserService from '../../components/user/user-service';
import _ from 'lodash';

class PrivatePostsRoute {
  action(params) {
    if (Meteor.userId()) {
      BlazeLayout.setRoot('#postme-content-view');
      BlazeLayout.render('posts');
    } else {
      FlowRouter.go('/');
    }
  }
}

Template.posts.helpers({
  posts() {

    return PostService.getUserPosts(Meteor.userId())
  },
});

export default new PrivatePostsRoute();
