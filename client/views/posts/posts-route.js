import './posts.tpl.html';
import PostService from '../../components/post/post-service';
import _ from 'lodash';

class postRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render('post');
  }
}

Template.post.helpers({
  posts() {

    return PostService.getAll()
  },
});

export default new postRoute();
