import User from './user-model';

class UserService {

  getCurrentUser() {
    !this.user && Meteor.user() && (this.user = new User(Meteor.user()));

    return this.user;
  }

  updateUser(_id, $set) {
    Meteor.users.update({_id}, {$set});
  }
}

export default new UserService();
