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
                text: '',
                regexes: []
            };
        },
        propTypes: {
            text: React.PropTypes.string,
            regexes: React.PropTypes.array
        },
        render: function() {
            return (
                <div>
          <textarea
              onChange={ function( event ) { FormActionCreator.textInputChanged( event.target.value ); } }
              value={ this.props.text }>
          </textarea>
                </div>
            );
        }
    } );
})();
