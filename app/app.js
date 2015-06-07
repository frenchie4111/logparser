var React = require( 'react' ),
    Form = require( './components/Form.js' );

require('./assets/styles/app.scss');

Form = React.createFactory( Form );

React.render( Form(), document.getElementById( 'content' ) );
