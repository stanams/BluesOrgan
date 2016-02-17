var Store = require('flux/util').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var _keys = [];
var KeyStore = new Store(AppDispatcher);
