import { Session } from 'meteor/session';
import './edit-post.tpl.html';
let userPost;

class EditPostRoute {
  action(params) {
    if (Meteor.userId()) {
      Meteor.call('posts.getUserPost', Meteor.userId(), FlowRouter.current().params.id, (err, post) => {
        if (!err && post) {
          userPost = post;
          Session.set('userPost', post);
        }
      })
BlazeLayout.render('editPost');
    } else {
      FlowRouter.go('/');
    }
  }
}

Template.editPost.helpers({
  post() {

    return userPost || FlowRouter.go('/');
  }
});

Template.editPost.events({
  'submit .editPost'(e) {
    e.preventDefault();
    const form = e.target;
    userPost && Meteor.call('posts.update', userPost._id, {
      title: form.title.value,
      public: form.public.checked,
      body: form.body.value
    });
    FlowRouter.go('/posts/private');
  }
});

export default new EditPostRoute();
