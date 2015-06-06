/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    var EventEmitter = require( 'events' ).EventEmitter,
        assign = require( 'object-assign' );

    var AppDispatcher = require( '../dispatcher/AppDispatcher' ),
        Constants = require( '../constants/FormConstants' );

    var Regex = function( regexText, outputText, error ) {
        this.regexText = regexText || '';
        this.regex = new RegExp( this.regexText ) || null;
        this.outputText = outputText || '';
        this.error = error || null;

        this.setRegexText = function( newText ) {
            this.regexText = newText;

            try {
                this.regex = new RegExp( this.regexText );
                this.error = null;
            } catch( err ) {
                this.error = err;
            }
        };

        this.setOutputText = function( newOutputText ) {
            this.outputText = newOutputText;
        };

        this.match = function( line ) {
            return line.match( this.regex );
        };
    };

    var MatchedLine = function( line, lineNum ) {
        this.line = line;
        this.lineNum = lineNum;
        this.matches = [];

        this.addMatch = function( regexOutput ) {
            if( !regexOutput ) return;
            this.matches.push( regexOutput );
        };

        this.hasMatches = function() {
            return this.matches.length > 0;
        };
    };

    var FormStore = assign( {}, EventEmitter.prototype, {
        CHANGE_EVENT: 'change',
        _text: '',
        _regexes: [],

        emitChange: function() {
            this.emit( this.CHANGE_EVENT );
        },

        addChangeListener: function( callback ) {
            this.on( this.CHANGE_EVENT, callback );
        },

        removeChangeListener: function( callback ) {
            this.removeListener( this.CHANGE_EVENT, callback );
        },

        getText: function() {
            return this._text;
        },

        getRegexes: function() {
            return this._regexes;
        },

        _getMatchesForLine: function( line ) {
            return this.getRegexes()
                .reduce( ( full, regex ) => {
                    full.push( regex.match( line ) );
                    return full;
                }, [] )
                .filter( ( item ) => item ); // Ignore it when there was no matches
        },

        getMatches: function() {
            var splitText = this.getText().split( '\n' );

            return splitText
                .map( ( line, lineNum ) => {
                    var matches = this._getMatchesForLine( line );

                    if( matches && matches.length > 0 ) {
                        return {
                            line,
                            lineNum,
                            matches: matches
                        };
                    }
                } )
                .filter( ( item ) => item );
        },

        _setText: function( newText ) {
            this._text = newText;
            this.emitChange();
        },

        _onRegexTextChange: function( newRegexText, key ) {
            this._regexes[ key ].setRegexText( newRegexText );
            this.emitChange();
        },

        _onRegexOutputChange: function( newOutputText, key ) {
            this._regexes[ key ].setOutputText( newOutputText );
            this.emitChange();
        },

        _addRegex: function() {
            this._regexes.push( new Regex() );
            this.emitChange();
        }
    } );

    FormStore.dispatchToken = AppDispatcher.register( function( action ) {
        switch( action.type ) {
            case Constants.TEXT_CHANGED:
                FormStore._setText( action.text );
                break;
            case Constants.REGEX_TEXT_CHANGED:
                FormStore._onRegexTextChange( action.regexText, action.key );
                break;
            case Constants.REGEX_OUTPUT_CHANGED:
                FormStore._onRegexOutputChange( action.outputText, action.key );
                break;
            case Constants.ADD_REGEX:
                FormStore._addRegex();
                break;
        }
    } );

    module.exports = FormStore;
})();
