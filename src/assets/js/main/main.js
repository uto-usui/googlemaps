import 'babel-polyfill';
import Vue from 'Vue';
import myPost from 'Component/post';

$('.main').addClass('is-active');


new Vue({
  el: '#app',
  components: {
    myPost
  },
  data: {
    message: 'Hello,Vue.js!'
  }
});