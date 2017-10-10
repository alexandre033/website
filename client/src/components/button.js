import React from 'react';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

export const ButtonHome = (props) =>{


	const show = props.showMore
	return(
			<div id="button" onClick={show}><ChevronDownIcon/></div>
		)
	
}