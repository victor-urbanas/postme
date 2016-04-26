import './templates/posts.tpl.html';
import PostService from '../../components/post/post-service';
import _ from 'lodash';

class PostsRoute {
  action(params) {
      BlazeLayout.render('posts', { tpl: 'allPublicPosts' });
  }
}

Template.allPublicPosts.helpers({
  posts() {

    return PostService.getAllPublicPosts()
  },
});

export default new PostsRoute();
