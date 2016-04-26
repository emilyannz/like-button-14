import Ember from 'ember';

export default Ember.Component.extend({
  score: 0,

  likeCountUp(score) {
    this.set(`score`, this.score + 1);
  },

  likeCountDown(score) {
    this.set(`score`, this.score - 1);
  },
});
