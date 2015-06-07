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
                regexes: [],
                id: ''
            };
        },
        propTypes: {
            text: React.PropTypes.string,
            regexes: React.PropTypes.array,
            id: React.PropTypes.string
        },
        render: function() {
            return (
                <div
                    id={ this.props.id }>
                        <h1>
                            Input
                        </h1>
                        <textarea
                            placeholder="Enter Text Here..."
                            onChange={ function( event ) { FormActionCreator.textInputChanged( event.target.value ); } }
                            value={ this.props.text }>
                        </textarea>
                </div>
            );
        }
    } );
})();
