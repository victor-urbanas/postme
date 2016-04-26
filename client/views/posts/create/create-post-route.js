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
    console.log();
    PostService.create({
      authorId: Meteor.userId(),
      authorName: UserService.getCurrentUser().getName(),
      title: form.title.value,
      public: form.public.checked,
      body: form.body.value
    });
    FlowRouter.go('/posts/private');
  }
});

export default new postRoute();
