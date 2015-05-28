/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
  var React = require( 'react' ),
    RegexInput = require( './RegexInput' ),
    FormActionCreator = require( '../actions/FormActionCreator' );

  module.exports = React.createClass( {
    getDefaultProps: function() {
      return {
        style: {},
        regexes: []
      };
    },
    propTypes: {
      style: React.PropTypes.object,
      regexes: React.PropTypes.array
    },
    _renderRow: function( regex, i ) {
      return (
        <RegexInput
          key={ i }
          regexText={ regex.regexText }
          onRegexTextChange={ ( newText ) => FormActionCreator.regexTextChanged( newText, i ) }
          outputText={ regex.outputText }
          onOutputTextChange={ ( newText ) => FormActionCreator.outputTextChanged( newText, i ) }
          error={ regex.error } />
      );
    },
    render: function() {
      return (
        <div
          style={ this.props.style }>
          <div>
            {
              this.props.regexes
                .map( this._renderRow )
            }
          </div>
          <div
            style={ { width: 100, height: 30, backgroundColor: 'black' } }
            onClick={ function() { FormActionCreator.addRegex(); } }>
          </div>
        </div>
      );
    }
  } );
})();
