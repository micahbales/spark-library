import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  favorite: DS.attr('boolean'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  owner: DS.belongsTo('user')
});
