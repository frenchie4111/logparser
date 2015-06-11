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
                id: '',
                regexes: []
            };
        },
        propTypes: {
            id: React.PropTypes.string,
            regexes: React.PropTypes.array
        },
        _renderRow: function( regex, i ) {
            return (
                <RegexInput
                    className='RegexInputs_row'
                    key={ i }
                    regexText={ regex.regexText }
                    onRegexTextChange={ function( newText ) { FormActionCreator.regexTextChanged( newText, i ); } }
                    outputText={ regex.outputText }
                    onOutputTextChange={ function( newText ) { FormActionCreator.outputTextChanged( newText, i ); } }
                    error={ regex.error }/>
            );
        },
        render: function() {
            return (
                <div
                    id={ this.props.id }>
                    <div
                        id='RegexInputs_rowContainer'>
                        {
                            this.props.regexes
                                .map( this._renderRow )
                        }
                    </div>
                    <div
                        id='RegexInputs_addButton'
                        onClick={ function() { FormActionCreator.addRegex(); } }>
                        Add Another Regex
                    </div>
                </div>
            );
        }
    } );
})();
