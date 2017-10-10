import axios from 'axios';
export const SEND_MESSAGE = "SEND_MESSAGE";


export function sendMessage(values, callback){

	const request = axios.post("http://localhost:8080/api/email", values)
	.then(() =>{callback()})
	return {

		type : SEND_MESSAGE,
		payload : request
	}
}

