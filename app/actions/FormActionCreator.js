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
    }
  };
})();
