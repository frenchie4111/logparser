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
        text: ''
      };
    },
    propTypes: {
      style: React.PropTypes.object,
      text: React.PropTypes.string
    },
    _style: {
      textarea: {
        width: '100%',
        height: '100%'
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
        </div>
      );
    }
  } );
})();
