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
    Constants = require( '../constants/FormConstants' ),
    Regex = require( '../data_schemas/Regex' );

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

    getMatches: function() {
      var _this = this;
      var text = _this.getText();

      return text
        .split( '\n' )
        .map( ( line, lineNum ) => {
          var responseObject = _this.getRegexes()
            .map( ( regexObj ) => regexObj.regex )
            .reduce( ( full, regex ) => {
              var match = line.match( regex );

              if( match )
                full.matches.push( match );

              return full;
            }, {
              line,
              lineNum,
              matches: []
            } );

          if( responseObject.matches.length > 0 )
            return responseObject;
        } )
        .filter( ( item ) => item ); // Remove undefined / null values
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
