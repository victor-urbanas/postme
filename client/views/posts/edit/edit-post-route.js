import './edit-post.tpl.html';
import PostService from '../../../components/post/post-service';
import UserService from '../../../components/user/user-service';
import _ from 'lodash';
let post;

class EditPostRoute {
  action(params) {
    Meteor.userId() ? BlazeLayout.render('editPost') : FlowRouter.go('/');
  }
}

Template.editPost.helpers({
  post() {

    return post = PostService.getUserPost(Meteor.userId(), FlowRouter.current().params.id) || FlowRouter.go('/');
  }
});

Template.editPost.events({
  'submit .editPost'(e) {
    e.preventDefault();
    const form = e.target;
    PostService.update(post._id, {
      authorId: Meteor.userId(),
      authorName: UserService.getCurrentUser().getName(),
      title: form.title.value,
      public: form.public.checked,
      body: form.body.value
    });
    FlowRouter.go('/posts/private');
  }
});

export default new EditPostRoute();
