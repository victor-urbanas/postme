import './edit-post.tpl.html';
let post;

class EditPostRoute {
  action(params) {
    if (Meteor.userId()) {
      Meteor.call('posts.getUserPost', Meteor.userId(), FlowRouter.current().params.id)
BlazeLayout.render('editPost');
    } else {
      FlowRouter.go('/');
    }
  }
}

Template.editPost.helpers({
  post() {

    return post =  || FlowRouter.go('/');
  }
});

Template.editPost.events({
  'submit .editPost'(e) {
    e.preventDefault();
    const form = e.target;
    Meteor.call('posts.update', post._id, {
      title: form.title.value,
      public: form.public.checked,
      body: form.body.value
    });
    FlowRouter.go('/posts/private');
  }
});

export default new EditPostRoute();
