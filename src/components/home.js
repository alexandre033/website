import React, {Component} from 'react';
import {ButtonHome} from './button';


class Home extends Component{

	render(){
		return(
			<div className="site-wrapper">
				<div className="site-wrapper-inner">
					<div className="cover-container">
							<h1>Bonjour, Alexandre<br/>
							Développeur Front-end<span className="point"></span>
							</h1>
					</div>
					
				</div>
				<ButtonHome/>
			</div>
			)
	}
}


export default Home