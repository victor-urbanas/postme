export default class User {
  constructor(data) {
    Object.assign(this, data);
  }
  getName() {

    return `${this.firstName || ''} ${this.lastName || ''}`.trim() || this.username;
  }
}
