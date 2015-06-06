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
                style: {},
                output: []
            };
        },
        propTypes: {
            style: React.PropTypes.object,
            output: React.PropTypes.array
        },
        _style: {
            div: {
                width: '100%',
                height: '100%'
            }
        },
        render: function() {
            return (
                <div
                    style={ this.props.style }>
                    <div
                        style={ this._style.div }>
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
                </div>
            );
        }
    } );
})();
