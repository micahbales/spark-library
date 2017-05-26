import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('.primary-nav-bar .navbar-nav li').on('click', ({currentTarget} /* e.currentTarget */) => {
      /* Arrow functions do not bind `this`, so we have to pass currentTarget
        from the click event in order to know which element to target */
      Ember.$('.primary-nav-bar .navbar-nav li.active').removeClass('active');
      Ember.$(currentTarget).addClass('active');
    });

    Ember.$('.navbar-brand').on('click', (/*{currentTarget}*/) => {
      Ember.$('.primary-nav-bar .navbar-nav li.active').removeClass('active');
      Ember.$('.primary-nav-bar .navbar-nav li').first().addClass('active');
    });
  }
});
