import "./styles.scss";
import apet4life from "src/assets/img/projects/apet4life.png";
import omyband from "src/assets/img/projects/omyband.png";

const Projects = () => (
    <div className="projects">
        <p className="projects__title">MES PROJETS</p>
        <p>Durant de mes deux formations j'ai pratiqué les notions appris dans divers projets proposés par la formation absolument tous les jours via différents challenges. Cependant, les principaux projets où on a pu mettre en pratique tout ce qu'on avait appris tout au long de l'année sont ceux que je présente ici.</p>
        <div className="projects__list">
            <div className="project">
                <p className="project__title">A Pet 4 Life</p>
                <img className="project__img" src={apet4life} alt="aPet4Life" />
                <p className="project__desc">Projet réalisé en fin de formation DWWM</p>
                <a
                    className="project__link"
                    href="https://apet4life.huiitre.fr/"
                    target="_blanc"
                >
                    Lien vers le site
                </a>
            </div>
            <div className="project">
                <p className="project__title">O'MY BAND</p>
                <img className="project__img" src={omyband} alt="omyband" />
                <p className="project__desc">Projet réalisé en fin de formation CDA</p>
                <a className="project__link" href="" target="_blanc">
                    Lien à venir
                </a>
            </div>
        </div>
    </div>
);

export default Projects;
