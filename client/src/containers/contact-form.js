import React, {Component} from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import {connect} from 'react-redux';
import {sendMessage} from '../actions';

class ContactForm extends Component{

	constructor(props){
		super(props);
		this.state = {display:'none'}
	}

	renderField(field){

		return(
			<div className="form-group">
				<label>{field.label}</label>
				<input 
				{...field.input} 
				type="text"
				className="form-control"
				/>
				{field.meta.touched ? field.meta.error: ""}
			</div>
			)
	}

	submitForm(values, callback,e){
		if(!values){
			e.preventDefault();
		}
		const {reset} = this.props
		this.props.sendMessage(values, () =>{
			window.setTimeout(()=>{
				reset();
				this.setState({display:'block'})
			},1500)
			
		});
	}


	render(){
		const {handleSubmit} = this.props

		const divStyle = {

			display: this.state.display,
			marginTop: '16px',
    		borderRadius: 0,
		}

		return(
			<div>
				<form onSubmit={handleSubmit(this.submitForm.bind(this))}>
				    <Field label="Nom" name="nom" component={this.renderField}/>
				    <Field label="Email" name="email" component={this.renderField}/>
					<div className="form-group"	>
				        <label htmlFor="Message">Message</label>
				        <Field name="message" component="textarea" className="form-control"/>
	      			</div>
	      			<button type="submit" className="btn btn-primary">Envoyer</button>
				</form>
				<div class="alert alert-success" role="alert" style={divStyle}>
	  				Votre message a bien été envoyé
				</div>
			</div>

			)
	}
}

function validate(values){

	const errors = {}
	if(!values.objet){
		errors.objet = 'Merci d\'indiquer l\'objet de votre demande'
	}
	if(!values.nom){
		errors.nom = 'Merci de saisir un nom'
	}
	if(!values.email){
		errors.email = 'Merci de saisir une adresse email valide !'
	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse Email invalide'
  }
	return errors
}

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})(
connect(null, {sendMessage})(ContactForm)
)