var React = require( 'react' ),
    Form = require( './components/Form.js' );

Form = React.createFactory( Form );

React.render( Form(), document.getElementById( 'content' ) );
