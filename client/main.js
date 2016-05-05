import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import moment from 'moment';
import '../imports/startup/accounts-config.js';
import '../imports/api/users';
import '../imports/api/posts';
import '../imports/api/comments';

import './main.html';

Template.registerHelper('equals', (a, b) => a === b);
Template.registerHelper('includes', (arr, item) => arr.includes(item));
Template.registerHelper('formatDate', date => date && moment(date).format('MM-DD-YYYY HH:mm:ss'));

Meteor.startup(() => Hooks.init());
Hooks.onLoggedOut = userId => FlowRouter.go('/');
