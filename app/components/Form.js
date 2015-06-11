/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    var React = require( 'react' ),
        TextInput = require( './TextInput' ),
        RegexMenu = require( './RegexMenu' ),
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
                    id="Form_container">
                    <div
                        id="Form_text">
                        <TextInput
                            id="Form_input"
                            text={ FormStore.getText() }/>
                        <TextOutput
                            id="Form_output"
                            output={ FormStore.getOutput() }/>
                    </div>
                    <div
                        id="Form_regex">
                        <RegexMenu
                            id="Form_regexMenu"
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
