import './create-post.tpl.html';

class CreatePostRoute {
  action(params) {
    Meteor.userId() ? BlazeLayout.render('createPost') : FlowRouter.go('/');
  }
}

Template.createPost.events({
  'submit .createPost'(e) {
    e.preventDefault();
    const form = e.target, user = Meteor.user();
    Meteor.call('posts.create', {
      authorId: Meteor.userId(),
      authorName: (user.profile && `${user.profile.firstName || ''} ${user.profile.lastName || ''}`.trim()) || user.username,
      title: form.title.value,
      public: form.public.checked,
      body: form.body.value,
      rating: 0,
      voters: [],
      comments: [],
      createdAt: new Date()
    });
    FlowRouter.go('/posts/private');
  }
});

export default new CreatePostRoute();
