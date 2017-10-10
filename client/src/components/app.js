import React, {Component} from 'react';
import Home from './home';
import Skills from './skills';
import ContactSection from './contact';
import {Footer} from './footer';


class App extends Component{

	render(){
		return(
			<div>
				<Home />
				<Skills/>
				<ContactSection/>
				<Footer />
			</div>
			)
	}
}

export default App