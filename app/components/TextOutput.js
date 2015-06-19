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
                output: [],
                id: ''
            };
        },
        propTypes: {
            output: React.PropTypes.array,
            id: React.PropTypes.string
        },
        render: function() {
            return (
                <div
                    id={ this.props.id }>
                    <h1>
                        Output
                    </h1>
                    <div
                        id="TextOutput_outputLines">
                        {
                            this.props.output
                                .map( function( line, i ) {
                                    return (
                                        <div key={ i }>
                                            <div
                                                className='lineNum'
                                                style={{ backgroundColor: line.color }}>
                                                { line.text }
                                            </div>
                                        </div>
                                    );
                                } )
                        }
                    </div>
                </div>
            );
        }
    } );
})();
