/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
  var AppDispatcher = require( '../dispatcher/AppDispatcher' ),
    Constants = require( '../constants/FormConstants' );

  module.exports = {
    textInputChanged: function( newText ) {
      AppDispatcher.dispatch( {
        type: Constants.TEXT_CHANGED,
        text: newText
      } );
    },

    regexTextChanged: function( regexText, key ) {
      AppDispatcher.dispatch( {
        type: Constants.REGEX_TEXT_CHANGED,
        regexText,
        key
      } );
    },

    outputTextChanged: function( outputText, key ) {
      AppDispatcher.dispatch( {
        type: Constants.REGEX_OUTPUT_CHANGED,
        outputText,
        key
      } );
    },

    addRegex: function() {
      AppDispatcher.dispatch( {
        type: Constants.ADD_REGEX
      } );
    }
  };
})();
