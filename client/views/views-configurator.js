import profileRoute from './profile/profile-route';
import postsRoute from './posts/posts-route';
import publicPostsRoute from './posts/public-posts-route';
import privatePostsRoute from './posts/private-posts-route';
import createPostRoute from './posts/create/create-post-route';

FlowRouter.route('/profile', profileRoute);
FlowRouter.route('/posts/public', publicPostsRoute);
FlowRouter.route('/posts/private', privatePostsRoute);
FlowRouter.route('/post/create', createPostRoute);
FlowRouter.route('/', postsRoute);
