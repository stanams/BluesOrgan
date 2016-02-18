var KeyActions = require('../actions/key_actions');

$(function(){

    $(document).keydown(function(e){
      KeyActions.keyPressed(e.which);
    });
    $(document).keyup(function(e){
      KeyActions.keyUnpressed(e.which);
    });
})
