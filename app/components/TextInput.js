/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
  var React = require( 'react' ),
    FormActionCreator = require( '../Actions/FormActionCreator' );

  module.exports = React.createClass( {
    getDefaultProps: function() {
      return {
        style: {},
        text: '',
        regex: []
      };
    },
    propTypes: {
      style: React.PropTypes.object,
      text: React.PropTypes.string,
      regex: React.PropTypes.array
    },
    _style: {
      textarea: {
        width: '100%',
        height: '80%'
      },
      regex: {
        width: '100%',
        height: '20%'
      }
    },
    render: function() {
      return (
        <div
          style={ this.props.style }>
          <textarea
            style={ this._style.textarea }
            onChange={ function( event ) { FormActionCreator.textInputChanged( event.target.value ); } }
            value={ this.props.text }>
          </textarea>
          <textarea
            style={ this._style.regex }
            onChange={ function( event ) { FormActionCreator.regexInputChanged( event.target.value ); } }
            value={ this.props.regex.map( ( regex ) => regex.toString().slice( 1, -1 ) ).join( '\n' ) }>
          </textarea>
        </div>
      );
    }
  } );
})();
