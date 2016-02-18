var React = require('react');
var Tone = require('../constants/Tones');
var Note = require('../util/Note');
var KeyStore = require('../stores/KeyStore');

var Key = React.createClass({

  getInitialState: function(){
    return{
      pressed: false
    };
  },

  exists: function(){
    var doesExist = KeyStore.findNote(this.props.keyNote);
    if (doesExist) {
      this.note.start();
      this.style = "playing";
      this.setState({pressed: true});
    } else {
      this.note.stop();
      this.style = "";
      this.setState({pressed: false});
    }
  },

  componentDidMount: function(){
    this.note = new Note(Tone[this.props.keyNote]);
    KeyStore.addListener(this.exists);
  },


  componentWillUnmount: function(){
    KeyStore.removeListener(this.exists);
  },


  render: function(){

    return(
         <li className={this.style}>
           <span>{this.props.keyNote}</span>
         </li>
    );
  },

});

module.exports = Key;
