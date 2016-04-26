export default class User {
  constructor(data) {
    Object.assign(this, data);
  }
  getName() {
    return `${this.profile.firstName || ''} ${this.profile.lastName || ''}`.trim() || this.username;
  }
}
