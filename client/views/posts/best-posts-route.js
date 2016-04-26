import PostService from '../../components/post/post-service';
import UserService from '../../components/user/user-service';
import _ from 'lodash';

class BestPostsRoute {
  action(params) {
     BlazeLayout.render('posts', { tpl: 'bestPublicPosts' })
  }
}

Template.bestPublicPosts.helpers({
  posts() {

    return PostService.getBestPublicPosts()
  },
});

export default new BestPostsRoute();
