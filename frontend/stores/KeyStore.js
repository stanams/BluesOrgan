var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');
var Mapping = require('../constants/mapping');
var Note = require('../util/Note');
var Tone = require('../constants/Tones');

var _keys = [];
var KeyStore = new Store(AppDispatcher);

KeyStore.all = function(){
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload){
  switch(payload.actionType){
    case "START_KEY":
      addKey(payload.keys);
      KeyStore.__emitChange();
      break;
    case "STOP_KEY":
      removeKey(payload.keys);
      KeyStore.__emitChange();
      break;
    }
};

KeyStore.findNote = function(note){
  if (_keys.indexOf(note) === -1) {
    return false;
  } else {
    return true;
  }
};

function addKey(key){
  var idx = _keys.indexOf(Mapping[key]);
  if(idx !== -1){
    return;
  }
  _keys.push(Mapping[key]);
}

function removeKey(key){
  var idx = _keys.indexOf(Mapping[key]);
  _keys.splice(idx, 1);
}

module.exports = KeyStore;
