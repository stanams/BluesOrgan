var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require("./dispatcher/Dispatcher");
var Note = require('./util/Note');
var KeyPressUtil = require('./util/KeyListener');
var KeyStore = require('./stores/KeyStore');
var Organ = require('./components/Organ');

document.addEventListener('DOMContentLoaded', function(){

  var content = document.querySelector('#content');
  ReactDOM.render(<Organ />, content);
});
