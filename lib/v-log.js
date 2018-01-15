/**
 * v-echo v1.0.0
 * (c) 2017 saturn
 * @license MIT
 */

(function (global, factory) {

  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) : (global.VueLog = factory());

}(this, (function () {
  'use strict';

  // VueLog
  var VueLog = {};

  // Install
  function install (Vue) {
    Vue.prototype.$log = function ( params, level ) {
    
      var colors = ['color:#000;font-size:2em','color:orange;font-size:2em','color:#f0f;font-size:2em'];
      
      if(typeof level != 'undefined'){
          if(level == 1){
            console.log('%c' + params, colors[1]);// info
          }else if(level == 2){
            console.log('%c' + params, colors[2]);// warn
          }else{
            console.log('%c' + params, colors[0]);// default
          }
      }else{
        console.log('%c' + params, colors[0]);// default
      }
      
    }
  }

  VueLog.install = install;
  VueLog.version = '1.0.0';

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLog);
  }

  return VueLog;

})));
