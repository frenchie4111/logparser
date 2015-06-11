/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    var React = require( 'react' );

    module.exports = React.createClass( {
        getDefaultProps: function() {
            return {
                className: '',
                regexText: '',
                onRegexTextChange: function() {
                },
                outputText: '',
                onOutputTextChange: function() {
                },
                key: '',
                error: false
            };
        },
        propTypes: {
            className: React.PropTypes.string,
            key: React.PropTypes.string,
            regexText: React.PropTypes.string,
            onRegexTextChange: React.PropTypes.function,
            outputText: React.PropTypes.string,
            onOutputTextChange: React.PropTypes.function,
            error: React.PropTypes.string
        },
        render: function() {
            return (
                <div
                    className={ this.props.className }>
                    <input
                        type='text'
                        value={ this.props.regexText }
                        className='RegexInput_regexText'
                        onChange={ ( event ) => this.props.onRegexTextChange( event.target.value ) }/>
                    <input
                        type='text'
                        value={ this.props.outputText }
                        className='RegexInput_outputText'
                        onChange={ ( event ) => this.props.onOutputTextChange( event.target.value ) }/>
                </div>
            );
        }
    } );
})();
