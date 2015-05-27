/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
  var React = require( 'react' ),
    TextInput = require( './TextInput' ),
    TextOutput = require( './TextOutput' );

  var FormStore = require( '../stores/FormStore' );

  module.exports = React.createClass( {
    getDefaultProps: function() {
      return {
      };
    },
    _style: {
      div: {
      },
      left: {
        width: '50%',
        height: 500,
        float: 'left'
      },
      right: {
        width: '48%',
        height: 500,
        float: 'right'
      }
    },
    _onChange: function() {
      this.forceUpdate();
    },
    render: function() {
      return (
        <div>
          <TextInput
            style={ this._style.left }
            text={ FormStore.getText() } />
          <TextOutput
            style={ this._style.right }
            matches={ FormStore.getMatches() } />
        </div>
      );
    },
    componentDidMount: function() {
      FormStore.addChangeListener( this._onChange );
    },
    componentDidUnmount: function() {
      FormStore.addChangeListener( this._onChange );
    }
  } );
})();
