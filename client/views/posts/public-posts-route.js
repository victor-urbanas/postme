import { Session } from 'meteor/session';

class PublicPostsRoute {
  action(params) {
    if (Meteor.userId()) {
      Meteor.call('posts.getUserPublicPosts', Meteor.userId(), (err, posts) => {
        if (!err) {
          BlazeLayout.render('posts', { tpl: 'userPublicPosts' });
          Session.set('userPublicPosts', posts)
        }
      })
    } else {
      FlowRouter.go('/');
    }
  }
}

Template.userPublicPosts.helpers({
  posts() {

    return Session.get('userPublicPosts');
  },
});

export default new PublicPostsRoute();
