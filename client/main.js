import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import UserService from './components/user/user-service';
import _ from 'lodash';
import moment from 'moment';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});
Template.registerHelper('equals', (a, b) => a === b);
Template.registerHelper('includes', (arr, item) => arr.includes(item));
Template.registerHelper('formatDate', date => date && moment(date).format('MM-DD-YYYY HH:mm:ss'));

Meteor.startup(function() {
  Hooks.init();
});
Hooks.onLoggedOut = (userId) => FlowRouter.go('/');
