import React, {Component} from 'react';
import ContactForm from '../containers/contact-form';
import GithubBoxIcon from 'mdi-react/GithubBoxIcon';
import TwitterBoxIcon from 'mdi-react/TwitterBoxIcon';
import CellphoneIcon from 'mdi-react/CellphoneIcon'

class ContactSection extends Component{

	render(){

		return(

				<div className="jumbotron">
					<div className="container">
						<div className="col-md-8">
							<ContactForm/>
						</div>
						<div className="col-md-4 contact">				
							<p>Alexandre Beaudouin<br/>
							Wordpress & Développeur Front-End (JS/React)<br/>
							Bordeaux - Freelance</p>
							<ul>
								<li><a href="https://github.com/alexandre033"><GithubBoxIcon/> Github</a></li>
								<li><a href="https://twitter.com/alexbeaudouin?lang=fr"><TwitterBoxIcon/> Twitter</a></li>
							</ul>
						</div>
					</div>

				</div>

			)
	}
}

export default ContactSection