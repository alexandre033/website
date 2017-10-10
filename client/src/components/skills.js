import React, {Component} from 'react';
import LanguageHtml5Icon from 'mdi-react/LanguageHtml5Icon';
import ReactIcon from 'mdi-react/ReactIcon';
import WordpressIcon from 'mdi-react/WordpressIcon';



class Skills extends Component{

	render(){
		return(
			<div className="container">
			<p>Développeur front-end freelance sur Bordeaux, j'interviens sur des problématiques liées à l'interface utilisateur, via l'intégration de maquettes sous HTML5/CSS3/JS.</p>
			<p>De plus, une partie de mes projets se concentrent autour du CMS Wordpress, adapté à une majorité des besoins actuels. Sur cette technologie je suis en mesure de gérer votre projet de A à Z (front et back). </p>
			<p>La forte popularité de la librairie <a href="https://reactjs.org/" target="_blank">React</a> m'a incité à me spécialiser sur cette nouvelle technologie qui apporte une solution évolutive, réactive pour tous vos projets. Les "One-page application" sont reconnues comme étant une des meilleures façon de procurer une expérience utilisateur fluide. De fait, la librairie React est une des meilleures façon de répondre aux attentes des nouveaux standards attendus par vos clients.</p>
				 <div className="row">
				    <div className="col-md-4">
				    	<div className="skills">
				    		<span><LanguageHtml5Icon/></span>
				    		<h2>INTEGRATION HTML/CSS</h2>
				    		<p>Intégration de vos maquettes sous HTML5/CSS3/JS en respectant l'accessibilité web avec un code propre et indenté.</p>
				    		<p> En fonction de votre projet l'utilisation de la librairie Bootstrap sera un atout afin de vous fournir un site/app s'adaptant à tous les appareils mobiles. </p>
				    	</div>
				    </div>
  					<div className="col-md-4">
  						<div className="skills">
  							<span><ReactIcon/></span>
  							<h2>REACT/REDUX</h2>
  							<p>La librairie React et l'utilisation de Redux sont des outils qui permettent de développer des projets maintenables, évolutifs avec un cycle de développement réduit. </p>
  							<p>Cette librairie concentre également une communauté de plus en plus importante du fait de sa nouvelle manière de créer des app web.</p>
  						</div>
  					</div>
  					<div className="col-md-4">
  						<div className="skills">
  							<span><WordpressIcon/></span>
  							<h2>CMS WORPRESS</h2>
  							<p>Le CMS Wordpress est devenu aujourd'hui un gage de qualité en terme de gestionnaire de contenu. Il vous offre la possibilité d'avoir un site vitrine de qualité ainsi que la possibilité de mettre à jour votre contenu par vos soins.</p>
  							<p> Sur cette technologie je suis en mesure de gérer le développement de votre site de A à Z.</p>
  						</div>
  					</div>
				  </div>
			</div>
			)
	}
}

export default Skills