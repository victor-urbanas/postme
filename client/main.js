import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import User from './components/user/user-model';
import AuthService from './components/auth/auth-service';
import UserService from './components/user/user-service';
import _ from 'lodash';

import './main.html';

Template.body.events({
  'click .delete-user'() {
    UserService.delete(this._id);
  }
});

Template.body.helpers({
  users() {
    return UserService.getAll();
  },
});
