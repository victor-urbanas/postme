import { Users } from '../../../imports/api/users';

class UserService {
  getAll() {

    return Users.find({});
  }

  save(user) {
    Users.insert(user);
  }

  get(login) {

    return Users.findOne({email: login}) || Users.findOne({username: login});
  }

  delete(id) {
      Users.remove(id);
  }
}

export default new UserService();
