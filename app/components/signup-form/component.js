import Ember from 'ember';

export default Ember.Component.extend({
  isButtonEnable: true,

  actions: {
    signUp(){
      alert('foo');
    }
  }
});
