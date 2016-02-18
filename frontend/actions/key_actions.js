var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function (keycode){
    AppDispatcher.dispatch({
      actionType: "START_KEY",
      keys: keycode
    });
  },
  keyUnpressed: function (keycode){
    AppDispatcher.dispatch({
      actionType: "STOP_KEY",
      keys: keycode
    });
  }

};

module.exports = KeyActions;
