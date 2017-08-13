import React from 'react';
import Footer from '../Footer';
import config from '../../configuration';
import { Cover, CoverContent } from 'components/Cover';
import './Home.css';

class Home extends React.Component {

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div>
				<section className="home-section" style={{overflow: 'hidden'}}>
					<Cover
					className="cover home-cover"
					src={config.APP.DEFAULT_COVER}
					title="test">
						<CoverContent delay={1000} duration={550}>
							<h2 className="cover-title home-title">Club studio</h2>
						</CoverContent>
					</Cover>
					<div className="home-section-content">
						Vous qui entrez en ce site, abandonnez tout espoir. Vous voici dans l'antre des joyeux lurons du club Studio de Télécom Nancy, responsables notamment de la couverture photographique
						des évènements et de la promotion de ces derniers via affiches. Amateurs de finesse et de bon goût, je vous invite à fermer l'onglet. Les autres, les gens cool, mettez vous à l'aise.
						Vous découvrirez ici les créations graphiques du plus illustre des clubs du Ceten, nouvelles comme anciennes.
					</div>
				</section>

				<section className="home-section section-half">
					<Cover
						className="cover"
						src="https://static-wix-blog.wix.com/blog/wp-content/uploads/2015/05/07104447/photographers-checklist.png"
						title="test">
							<h2 className="cover-title">Club studio</h2>
					</Cover>
					<div className="home-section-content">
						De la photo compromettante de vous à la dernière soirée (vous saviez que vous n'auriez pas dû boire ce verre) aux affiches réalisées par le club (communication/humour/zizi...), tout le contenu
      	  	produit par le club ou presque, pour votre plus grand plaisir.
    	    	Nous recommandons tout de même aux âmes sensibles de s'abstenir, sait-on jamais.
					</div>
				</section>

				<section className="home-section section-half">
					<Cover
					className="cover"
					src="https://static-wix-blog.wix.com/blog/wp-content/uploads/2015/05/07104447/photographers-checklist.png"
					title="test">
						<h2 className="cover-title">Club studio</h2>
					</Cover>
					<div className="home-section-content">
						Mais qui sont-ils? D'où viennent-ils? Que font-ils? Et grands dieux mais que prennent-ils pour réussir à le faire?
        	Faites ici connaissance avec la grande famille Studio. Ils font parfois peur mais promis : ce sont des agneaux. Tant qu'on ne touche pas à leur bière, en tout cas.
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

export default Home;
