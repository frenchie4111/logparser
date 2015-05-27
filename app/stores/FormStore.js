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
    _regexes: [ /Test/g ],

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

    getMatches: function() {
      var text = this.getText();

      return this._regexes
        .map( function( regex ) {
          return text.match( regex );
        } );
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
