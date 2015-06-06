/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    var React = require( 'react' ),
        FormActionCreator = require( '../actions/FormActionCreator' ),
        RegexInputs = require( './RegexInputs' );

    module.exports = React.createClass( {
        getDefaultProps: function() {
            return {
                style: {},
                text: '',
                regexes: []
            };
        },
        propTypes: {
            style: React.PropTypes.object,
            text: React.PropTypes.string,
            regexes: React.PropTypes.array
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
                    <RegexInputs
                        style={ this._style.regex }
                        regexes={ this.props.regexes }/>
                </div>
            );
        }
    } );
})();
