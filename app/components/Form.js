/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    var React = require( 'react' ),
        TextInput = require( './TextInput' ),
        RegexInputs = require( './RegexInputs' ),
        TextOutput = require( './TextOutput' );

    var FormStore = require( '../stores/FormStore' );

    module.exports = React.createClass( {
        getDefaultProps: function() {
            return {};
        },
        _onChange: function() {
            document.location.hash = FormStore.getAfterHash();
            this.forceUpdate();
        },
        render: function() {
            return (
                <div
                    id="form">
                    <div
                        id="text">
                        <TextInput
                            text={ FormStore.getText() }/>
                        <TextOutput
                            output={ FormStore.getOutput() }/>
                    </div>
                    <div
                        id="regex">
                        <RegexInputs
                            regexes={ FormStore.getRegexes() }/>
                    </div>
                </div>
            );
        },
        componentDidMount: function() {
            FormStore.addChangeListener( this._onChange );
            if( document.location.hash ) FormStore.setAfterHash( document.location.hash );
        },
        componentDidUnmount: function() {
            FormStore.addChangeListener( this._onChange );
        }
    } );
})();
