import './templates/posts.tpl.html';
import PostService from '../../components/post/post-service';
import UserService from '../../components/user/user-service';
import _ from 'lodash';

class PostsRoute {
  action(params) {
      BlazeLayout.render('posts', { tpl: 'allPublicPosts' });
  }
}

Template.allPublicPosts.helpers({
  posts() {

    return PostService.getAllPublicPosts()
  },
});
Template.posts.events({
  'click .delete-post'() {
    if (this.authorId === UserService.getCurrentUser()._id && confirm('Are you sure you want to delete this post?')) {
      PostService.delete(this._id)
    }
  },
  'click .vote-post'() {
    const user = UserService.getCurrentUser();
    if (this.authorId !== user._id && !this.voters.includes(user.username)) {
      this.rating++;
      this.voters.push(user.username);

      PostService.update(this._id, _.pick(this, ['rating', 'voters']));
    }
  }
})

export default new PostsRoute();
