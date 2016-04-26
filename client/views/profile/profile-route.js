import './profile.tpl.html';
import AuthService from '../../components/auth/auth-service';
import User from '../../components/user/user-model';

class ProfileRoute {
  action(params) {
    BlazeLayout.setRoot('#postme-content-view');
    BlazeLayout.render("profile");
  }
}

export default new ProfileRoute();
