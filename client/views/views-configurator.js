// import signUpRoute from './signup/signup-route';
// import signInRoute from './signin/signin-route';
import profileRoute from './profile/profile-route';
import postRoute from './posts/posts-route';
import createPostRoute from './posts/create/create-post-route';
//
// FlowRouter.route('/signup', signUpRoute);
FlowRouter.route('/profile', profileRoute);
FlowRouter.route('/posts', postRoute);
FlowRouter.route('/post/create', createPostRoute);
FlowRouter.route('/', {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render("auth");
  }
});
