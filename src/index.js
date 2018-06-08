// Create a new component. This component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM)
import React from 'react';
import ReactDOM from 'react-dom';

const YOUTUBE_API_KEY = 'AIzaSyDKzv66ubLio_B1wTku4FmSyynOMdWGDlA';

const App = () => {
	return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));