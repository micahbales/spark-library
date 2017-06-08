import Ember from 'ember';

export default Ember.Controller.extend({
  email: "",
  password: "",
  repeatPassword: "",
  prevalidateCredentials(email, password, repeatPassword) {
    // email must be valid
    if (!this.validateEmailAddress(email)) {
      return this.toast.error('Invalid email');
    }
    // passwords must match
    if (password !== repeatPassword) {
      return this.toast.error('Passwords do not match');
    }
    // password must be long enough
    if (password.length < 8) {
      return this.toast.error('Password must be at least 8 characters long');
    }
  },
  validateEmailAddress(email) {
    let isValidEmail = (function (email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    })(email);

    return isValidEmail;
  },
  actions: {
    signupUser() {
      let email = this.get('email');
      let password = this.get('password');
      let repeatPassword = this.get('repeatPassword');

      // reset any previous error message
      Ember.$('.error').text('');

      this.prevalidateCredentials(email, password, repeatPassword);
    }
  }
});
