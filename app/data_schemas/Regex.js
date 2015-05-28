/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
  module.exports = function Regex( regexText, outputText, error ) {
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
  };
})();
