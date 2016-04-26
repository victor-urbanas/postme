import UserService from '../user/user-service';

class AuthService {

  signUp(user) {
    UserService.save(user);
  }

  signIn({login, password}) {
    const user = UserService.get(login);
    if (user && user.password === password) {
      localStorage.setItem('userName', user.username);
      FlowRouter.go('/profile')
    }
  }
}

export default new AuthService();
