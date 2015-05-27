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

  var FormStore = assign( {}, EventEmitter.prototype, {
    CHANGE_EVENT: 'change',
    _text: '',
    _regexes: [ /Test/, /a/g ],

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

      console.log( 'start' );

      return text
        .split( '\n' )
        .map( ( line, lineNum ) => {
          var responseObject = _this.getRegexes()
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
    }
  } );

  FormStore.dispatchToken = AppDispatcher.register( function( action ) {
    switch( action.type ) {
      case Constants.TEXT_CHANGED:
        FormStore._setText( action.text );
        break;
    }
  } );

  module.exports = FormStore;
})();
