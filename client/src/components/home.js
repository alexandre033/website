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
					<div	className="cont">
						<div className="header-home">
							<div className="col-md-12 col-sm-12">
								<Typist
								cursor={{ blink: true, }} avgTypingDelay={100}>
										Bonjour, Alexandre<br/>
										Développeur Front-end Freelance
								 </Typist>
							</div>
						</div>
					</div>
				</div>
				<ButtonHome showMore={this.renderMore}/>
			</div>
			)
	}
}


export default Home
