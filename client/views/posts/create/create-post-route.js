import './create-post.tpl.html';
import PostService from '../../../components/post/post-service';
import UserService from '../../../components/user/user-service';
import _ from 'lodash';

class CreatePostRoute {
  action(params) {
    Meteor.userId() ? BlazeLayout.render('createPost') : FlowRouter.go('/');
  }
}

Template.createPost.events({
  'submit .createPost'(e) {
    e.preventDefault();
    const form = e.target, user = UserService.getCurrentUser();
    PostService.create({
      authorId: Meteor.userId(),
      authorName: `${user.profile.firstName || ''} ${user.profile.lastName || ''}`.trim() || user.username,
      title: form.title.value,
      public: form.public.checked,
      body: form.body.value,
      rating: 0,
      voters: [],
      comments: []
    });
    FlowRouter.go('/posts/private');
  }
});

export default new CreatePostRoute();
