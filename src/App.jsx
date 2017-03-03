import React from 'react';
import {render} from 'react-dom';
import InputForm from './InputForm';
import './app.css';

class App extends React.Component {
	render () {
		return (
			<section>
				<h1>Welcome to <span>WE MAKE WIDGETS&reg;</span> online!</h1>
				<p>For all your <span>WIDGET&reg;</span> needs, come to us first!  We have a proven track record, and can fulfill your <span>WIDGET&reg;</span> needs, under budget with fast delivery!</p>
				<InputForm />
			</section>
		);
	}
}

render(<App/>, document.getElementById('mount-point'));