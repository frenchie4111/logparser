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

        this.output = function( regexResults ) {
            var outputText = this.outputText;

            regexResults
                .slice( 1 )
                .forEach( ( matched, i ) => {
                    var replace = '$' + ( i + 1 );
                    outputText = outputText.replace( replace, matched );
                } );

            return outputText;
        };
    };

    var MatchedLine = function( line, lineNum ) {
        this.line = line;
        this.lineNum = lineNum;
        this.matches = [];

        this.addMatch = function( regex, regexOutput ) {
            if( !regexOutput ) return;
            this.matches.push( [ regex, regexOutput ] );
        };

        this.hasMatches = function() {
            return this.matches.length > 0;
        };

        this.getOutput = function() {
            return this.matches
                .map( function( match ) {
                    return match[ 0 ].output( match[ 1 ] );
                } );
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

        _getMatchesForLine: function( line, lineNum ) {
            return this.getRegexes()
                .reduce( ( matchedLine, regex ) => {
                    matchedLine.addMatch( regex, regex.match( line ) );
                    return matchedLine;
                }, new MatchedLine( line, lineNum ) );
        },

        getMatches: function() {
            var splitText = this.getText().split( '\n' );

            return splitText
                .map( ( line, lineNum ) => {
                    var matchedLine = this._getMatchesForLine( line, lineNum );

                    if( matchedLine.hasMatches() ) return matchedLine;
                } )
                .filter( ( item ) => item );
        },

        getOutput: function() {
            return this.getMatches()
                .map( ( matchedLine ) => {
                    return matchedLine.getOutput();
                } )
                .reduce( ( full, outputArray ) => {
                    return full.concat( outputArray );
                }, [] );
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
