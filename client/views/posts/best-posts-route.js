import { Session } from 'meteor/session';

class BestPostsRoute {
  action(params) {
    Meteor.call('posts.getBestPublicPosts', (err, posts) => {
      if (!err) {
        Session.set('bestPublicPosts', posts);
        BlazeLayout.render('posts', { tpl: 'bestPublicPosts' });
      }
    });
  }
}

Template.bestPublicPosts.helpers({
  posts() {

    return Session.get('bestPublicPosts');
  },
});

export default new BestPostsRoute();
