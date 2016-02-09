import Ember from 'ember';
export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('post');
  },

  actions: {
    createPost(model) {
      let post = this.store.createRecord('post', {
        title: model.title,
        body: model.body,
        date: new Date()
      });
      post.save();
    }
  }
});
