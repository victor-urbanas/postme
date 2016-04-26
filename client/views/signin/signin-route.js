import './signin.tpl.html';
import AuthService from '../../components/auth/auth-service';
import User from '../../components/user/user-model';

class SignInRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render("signin");
  }
}

Template.body.events({
  'submit .signin'(e) {
    e.preventDefault();
    const form = e.target,
      formData = _.pick(form, ['login', 'password']),
      userData = _.transform(formData, (res, val, key) => res[key] = val.value);
    let user;
    if (!_.map(formData, 'value').includes('')) {
      AuthService.signIn(userData);
    }
  }
});

export default new SignInRoute();
