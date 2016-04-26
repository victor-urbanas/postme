import profileRoute from './profile/profile-route';
import publicPostsRoute from './posts/public/public-posts-route';
import privatePostsRoute from './posts/private/private-posts-route';
import createPostRoute from './posts/create/create-post-route';

FlowRouter.route('/profile', profileRoute);
FlowRouter.route('/posts/public', publicPostsRoute);
FlowRouter.route('/posts/private', privatePostsRoute);
FlowRouter.route('/post/create', createPostRoute);
FlowRouter.route('/', {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render("auth");
  }
});
