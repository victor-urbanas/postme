import PostService from '../../components/post/post-service';
import UserService from '../../components/user/user-service';
import _ from 'lodash';

class PrivatePostsRoute {
  action(params) {
    Meteor.userId() ? BlazeLayout.render('posts', { tpl: 'userPrivatePosts' }) : FlowRouter.go('/');
  }
}

Template.userPrivatePosts.helpers({
  posts() {

    return PostService.getUserPrivatePosts(Meteor.userId())
  },
});

export default new PrivatePostsRoute();
