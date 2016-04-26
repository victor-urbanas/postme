class UserService {

  getCurrentUser() {

    return Meteor.user();
  }

  updateUser(_id, $set) {
    Meteor.users.update({_id}, {$set});
  }
}

export default new UserService();
