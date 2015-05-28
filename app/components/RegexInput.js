/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
  var React = require( 'react' ),
    FormActionCreator = require( '../actions/FormActionCreator' );

  module.exports = React.createClass( {
    getDefaultProps: function() {
      return {
        style: {},
        regexText: '',
        outputText: '',
        key: '',
        error: false
      };
    },
    propTypes: {
      style: React.PropTypes.object,
      key: React.PropTypes.string,
      regexText: React.PropTypes.string,
      outputText: React.PropTypes.string,
      error: React.PropTypes.string
    },
    render: function() {
      return (
        <div style={ this.props.style } key={ this.props.key }>
          <input
            type='text'
            value={ this.props.regexText }
            onChange={ ( event ) => FormActionCreator.regexTextChanged( event.target.value, +this.props.key ) }/>
          <input
            type='text'
            value={ this.props.outputText }
            onChange={ ( event ) => FormActionCreator.outputTextChanged( event.target.value, +this.props.key ) } />
        </div>
      );
    }
  } );
})();
