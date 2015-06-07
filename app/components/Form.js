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
        _style: {
            div: {},
            left: {
                width: '50%',
                height: 500,
                float: 'left'
            },
            right: {
                width: '48%',
                height: 500,
                float: 'right'
            }
        },
        _onChange: function() {
            document.location.hash = FormStore.getAfterHash();
            this.forceUpdate();
        },
        render: function() {
            return (
                <div>
                    <div>
                        <TextInput
                            style={ this._style.left }
                            text={ FormStore.getText() } />
                        <TextOutput
                            style={ this._style.right }
                            output={ FormStore.getOutput() }/>
                    </div>
                    <RegexInputs
                        regexes={ FormStore.getRegexes() }/>
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
