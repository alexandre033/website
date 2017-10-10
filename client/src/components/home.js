import React, {Component} from 'react';
import {ButtonHome} from './button';
import Typist from 'react-typist';

class Home extends Component{

	renderMore(){
		//calcul de la hauteur de la fenetre
		const windowHeight = window.innerHeight
		//scroll de la hauteur defini, s'adapte à tous les ecrans
		window.scrollTo({
		  top: windowHeight, 
		  left: 0, 
		  behavior: 'smooth' 
		});
	}

	render(){

		return(
			<div className="jumbotron home">

				<div className="container">
				<div className="col-md-3"></div>
					<div className="col-md-6">
						<Typist 
						cursor={{ blink: true, }} avgTypingDelay={100}>
								Bonjour, Alexandre<br/>
								Développeur Front-end Freelance
						 </Typist>
					</div>
					<div className="col-md-3"></div>
				</div>
				<ButtonHome showMore={this.renderMore}/>
			</div>
			)
	}
}


export default Home