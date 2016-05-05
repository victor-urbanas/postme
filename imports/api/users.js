if (Meteor.isServer) {
  Meteor.methods({
    'users.update'(_id, $set) {
      Meteor.users.update({_id}, {$set});
    }
  });
}
