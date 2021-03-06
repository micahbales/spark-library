import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  identification: null,
  password: null,
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
