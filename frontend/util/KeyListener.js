var KeyActions = require('../actions/key_actions');

var KeyPressUtil = {
  keyDown: function(){
    $(document).keydown(function(e){
      KeyActions.keyPressed(e.which);
    });
  },

  keyUp: function(){
    $(document).keyup(function(e){
      KeyActions.keyUnpressed(e.which);
    });
  }

};
