var React = require('react');
var Tones = require('../constants/Tones');
var Key = require('./Key');

var Organ = React.createClass({
  render: function(){

    var keys = Object.keys(Tones).map(function(tone, idx){
      return <Key keyNote={tone} />;
    });

    return(
      <ul className="board">
        {keys}
      </ul>
    );
  }

});

module.exports = Organ;
