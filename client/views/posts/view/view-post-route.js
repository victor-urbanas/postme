import './view-post.tpl.html';
let post;

class ViewPostRoute {
  action(params) {
    BlazeLayout.render('viewPost');
  }
}

Template.viewPost.helpers({
  post() {

    return post = Meteor.call('posts.get', FlowRouter.current().params.id);
  }
});

Template.viewPost.events({
  'submit .commentForm'(e) {
    e.preventDefault();
    const form = e.target, user = Meteor.user();
    Meteor.call('comments.create', {
      postId: post._id,
      authorName: `${user.profile.firstName || ''} ${user.profile.lastName || ''}`.trim() || user.username,
      authorId: user._id,
      body: form.body.value,
      createdAt: new Date()
    });
  }
});

export default new ViewPostRoute();
