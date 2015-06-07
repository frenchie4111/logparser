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
                output: []
            };
        },
        propTypes: {
            output: React.PropTypes.array
        },
        render: function() {
            return (
                <div>
                    {
                        this.props.output
                            .map( function( line, i ) {
                                return (
                                    <div key={ i }>
                                        <a className='lineNum'>
                                            { line }
                                        </a>
                                    </div>
                                );
                            } )
                    }
                </div>
            );
        }
    } );
})();
