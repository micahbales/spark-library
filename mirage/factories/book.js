import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.lorem.words(3); },
  author() { return faker.name(); },
  description() { return faker.lorem.words(15); },
  url() { return faker.internet.url(); },
  favorite() { return faker.random.boolean(0.3); },
  createdAt() { return faker.date.past(); }
});
