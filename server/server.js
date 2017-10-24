var restify = require('restify');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var corsMiddleware = require('restify-cors-middleware')

//Middleware CORS
var cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
});



// Setup email config
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your user',
        pass: 'your mdp'
     }
});

//création du serveur
var server = restify.createServer();
//handle cross origin problem
server.pre(cors.preflight);
server.use(cors.actual);

//query & bodyparse tu use data send by url
server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));
server.use(restify.plugins.fullResponse());
//make the post email with nodemailer
server.post('/api/email', function create(req, res, next) { 



		var mail = {
					from: req.params.email,
					to: "your email",
					subject: "Demande d'informations - Front-end Dev",
					html: "nom: <br/>" + req.params.nom + "<br/> Message: <br/>" + req.params.message +" <br/>email <br/>"+req.params.email,
		}
		smtpTransport.sendMail(mail, function(error, response){
							if(error){
								console.log("Erreur lors de l'envoie du mail!");
								console.log(error);
							}else{
								console.log("Mail envoyé avec succès!")
							}
							smtpTransport.close();
		});

    res.send(201, req.params);    
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
