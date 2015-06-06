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
                matches: []
            };
        },
        propTypes: {
            style: React.PropTypes.object,
            matches: React.PropTypes.array
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
                            this.props.matches
                                .map( function( line, i ) {
                                    return (
                                        <div key={ i }>
                                            <a className='lineNum'>
                                                { line.lineNum }
                                            </a>
                                            <a className='line'>
                                                { line.line }
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
