import { Template } from 'meteor/templating';
import AuthService from '../../components/auth/auth-service';
import User from '../../components/user/user-model';
import './signup.tpl.html';

class SignUpRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render("signup");
  }
}

Template.signup.events({
  'submit .signup'(e) {
    e.preventDefault();
    const form = e.target,
      formData = _.pick(form, ['username', 'email', 'password']),
      userData = _.transform(formData, (res, val, key) => res[key] = val.value);
    if (!_.map(formData, 'value').includes('')) {
      AuthService.signUp(new User(userData));
      form.reset();
    }
  }
});

export default new SignUpRoute();
