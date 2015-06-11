/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    var React = require( 'react' ),
        RegexInputs = require( './RegexInputs' );

    module.exports = React.createClass( {
        getDefaultProps: function() {
            return {
                regexes: [],
                id: ''
            };
        },
        propTypes: {
            regexes: React.PropTypes.array,
            id: React.PropTypes.string
        },
        render: function() {
            return (
                <div
                    id={ this.props.id }>
                    <div
                        id='RegexMenu_menuBar'>
                        <h1>
                            Regex
                        </h1>
                        <div
                            id='RegexMenu_expandButton'>
                        </div>
                    </div>
                    <RegexInputs
                        id='RegexMenu_regexInputs'
                        regexes={ this.props.regexes }/>
                </div>
            );
        }
    } );
})();
