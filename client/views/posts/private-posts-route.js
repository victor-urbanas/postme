import { Session } from 'meteor/session';

class PrivatePostsRoute {
  action(params) {
    if (Meteor.userId()) {
      BlazeLayout.render('posts', { tpl: 'userPrivatePosts' });
      Meteor.call('posts.getUserPrivatePosts', Meteor.userId(), (err, posts) => {
        // TODO handle error
        !err && Session.set('userPrivatePosts', posts);
      });

    } else {
      FlowRouter.go('/');
    }
  }
}

Template.userPrivatePosts.helpers({
  posts() {

    return Session.get('userPrivatePosts');
  },
});

export default new PrivatePostsRoute();
