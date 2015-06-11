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
        getInitialState: function() {
            return {
                expanded: true
            };
        },
        propTypes: {
            regexes: React.PropTypes.array,
            id: React.PropTypes.string
        },
        _onExpandButtonClick: function() {
            this.setState( {
                expanded: !this.state.expanded
            } );
        },
        render: function() {
            return (
                <div
                    id={ this.props.id }
                    className={ ( this.state.expanded )?'expanded':'' }>
                    <div
                        id='RegexMenu_menuBar'>
                        <h1
                            id='RegexMenu_header'>
                            Regex
                        </h1>
                        <div
                            onClick={ this._onExpandButtonClick }
                            id='RegexMenu_expandButton'>
                        </div>
                    </div>
                    <div
                        id='RegexMenu_content'>
                        <RegexInputs
                            id='RegexMenu_regexInputs'
                            regexes={ this.props.regexes }/>
                        <div
                            id='RegexMenu_cheatsheet'>
                            Text
                        </div>
                    </div>
                </div>
            );
        }
    } );
})();
