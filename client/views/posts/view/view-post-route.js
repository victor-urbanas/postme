import './view-post.tpl.html';
import PostService from '../../../components/post/post-service';
import commentService from '../../../components/comment/comment-service';
import UserService from '../../../components/user/user-service';
import _ from 'lodash';
let post;

class ViewPostRoute {
  action(params) {
    BlazeLayout.render('viewPost');
  }
}

Template.viewPost.helpers({
  post() {

    return post = PostService.get(FlowRouter.current().params.id);
  }
});

Template.viewPost.events({
  'submit .commentForm'(e) {
    e.preventDefault();
    const form = e.target, user = UserService.getCurrentUser();
    commentService.create({
      postId: post._id,
      authorName: `${user.profile.firstName || ''} ${user.profile.lastName || ''}`.trim() || user.username,
      authorId: user._id,
      body: form.body.value,
      createdAt: new Date()
    });
  }
});

export default new ViewPostRoute();
