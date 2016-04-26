import './create-post.tpl.html';
import PostService from '../../../components/post/post-service';
import UserService from '../../../components/user/user-service';
import _ from 'lodash';

class postRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render('createPost');
  }
}

Template.createPost.events({
  'submit .createPost'(e) {
    e.preventDefault();
    const form = e.target;
    PostService.create({
      author: UserService.getCurrentUser().getName(),
      title: form.title.value,
      body: form.body.value
    });
    FlowRouter.go('/posts');
  }
});

export default new postRoute();
