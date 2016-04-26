import PostService from '../../components/post/post-service';
import _ from 'lodash';

class PublicPostsRoute {
  action(params) {
    Meteor.userId() ? BlazeLayout.render('posts', { tpl: 'userPublicPosts' }) : FlowRouter.go('/');
  }
}

Template.userPublicPosts.helpers({
  posts() {
    
    return PostService.getUserPublicPosts(Meteor.userId())
  },
});

export default new PublicPostsRoute();
