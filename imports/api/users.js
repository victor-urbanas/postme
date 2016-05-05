import {Mongo} from 'meteor/mongo';
// export const Users = new Mongo.Collection('users');

Meteor.methods({
  'users.update'(_id, $set) {
    Meteor.users.update({_id}, {$set});
  }
});
