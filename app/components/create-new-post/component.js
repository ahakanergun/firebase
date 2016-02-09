import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(model) {
      this.sendAction('createPost', model);

      // Clear each input field
      this.set('newPost.title', null);
      this.set('newPost.body', null);
    }
  }
});
