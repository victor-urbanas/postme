import './profile.tpl.html';
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
    Meteor.call('users.update', Meteor.userId(), {
      'profile.firstName': form.firstName.value,
      'profile.lastName': form.lastName.value
    });
  }
});
Template.profile.helpers({
  user() {
    const user = Meteor.user();
    user && (user.avatarUrl = Gravatar.imageUrl(user.emails[0].address, {
        size: 34,
        default: 'mm'
    }));

    return user;
  },
});

export default new ProfileRoute();
