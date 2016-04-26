import profileRoute from './profile/profile-route';
import postsRoute from './posts/posts-route';
import publicPostsRoute from './posts/public-posts-route';
import bestPostsRoute from './posts/best-posts-route';
import privatePostsRoute from './posts/private-posts-route';
import createPostRoute from './posts/create/create-post-route';
import editPostRoute from './posts/edit/edit-post-route';

BlazeLayout.setRoot('#postme-content-view');
FlowRouter.route('/profile', profileRoute);
FlowRouter.route('/posts/public', publicPostsRoute);
FlowRouter.route('/posts/private', privatePostsRoute);
FlowRouter.route('/posts/best', bestPostsRoute);
FlowRouter.route('/post/create', createPostRoute);
FlowRouter.route('/post/edit/:id', editPostRoute);
FlowRouter.route('/', postsRoute);
