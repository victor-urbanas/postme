import signUpRoute from './signup/signup-route';
import signInRoute from './signin/signin-route';
import profileRoute from './profile/profile-route';

FlowRouter.route('/signup', signUpRoute);
FlowRouter.route('/signin', signInRoute);
FlowRouter.route('/profile', profileRoute);
