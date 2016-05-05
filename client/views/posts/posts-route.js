import { Session } from 'meteor/session';
import './templates/posts.tpl.html';
import { _pick } from 'lodash';

class PostsRoute {
  action(params) {
      Meteor.call('posts.getAllPublicPosts', (err, posts) => {
        BlazeLayout.render('posts', { tpl: 'allPublicPosts' });
        // TODO handle error
        !err && Session.set('allPublicPosts', posts);
      })
      ;
  }
}

Template.allPublicPosts.helpers({
  posts() {
    return Session.get('allPublicPosts');
  }
});
Template.posts.events({
  'click .delete-post'() {
    if (this.authorId === Meteor.userId() && confirm('Are you sure you want to delete this post?')) {
      Meteor.call('posts.delete', this._id);
    }
  },
  'click .vote-post'() {
    const user = Meteor.user();
    if (this.authorId !== user._id && !this.voters.includes(user.username)) {
      this.rating++;
      this.voters.push(user.username);

      Meteor.call('posts.update', this._id, _pick(this, ['rating', 'voters']));
    }
  }
})

export default new PostsRoute();
