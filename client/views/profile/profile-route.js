import './profile.tpl.html';
import UserService from '../../components/user/user-service';
import _ from 'lodash';

class ProfileRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render('profile');
  }
}


Template.profile.events({
  'submit .userForm'(e) {
    e.preventDefault();
    const form = e.target;
    UserService.updateUser(Meteor.userId(), {
      'profile.firstName': form.firstName.value,
      'profile.lastName': form.lastName.value
    });
  }
});
Template.profile.helpers({
  user() {

    return UserService.getCurrentUser()
  },
});

export default new ProfileRoute();
