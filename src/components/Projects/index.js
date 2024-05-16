import { useEffect, useRef } from "react";
import "./styles.scss";
import apet4life from "src/assets/img/projects/apet4life.png";
import omyband from "src/assets/img/projects/omyband.png";
import oboardgame from "src/assets/img/projects/oboardgame.png";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const refProject1 = useRef();
  const refProject2 = useRef();
  const refProject3 = useRef();

  useEffect(() => {
    window.setTimeout(() => {
      refProject1.current.style.transition = "5s";
      refProject1.current.style.opacity = 1;
      refProject2.current.style.transition = "5s";
      refProject2.current.style.opacity = 1;
      refProject3.current.style.transition = "5s";
      refProject3.current.style.opacity = 1;
    }, 3000)
  }, []);

    return (
        <div className="projects pb-2 p-5 my-5 md:mx-8">
            <p className="font-bold text-2xl text-center mb-5">MES PROJETS</p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(
                            "Durant de mes deux formations, j'ai pratiqué les notions apprises dans divers projets proposés par la formation absolument tous les jours via différents challenges. Cependant, les principaux projets où on a pu mettre en pratique tout ce qu'on avait appris tout au long de l'année sont ceux que je présente ici."
                        )
                        .start();
                }}
                options={{
                    autoStart: true,
                    delay: 10,
                    wrapperClassName: "font-semibold",
                }}
            />
            <div className="flex flex-column gap-5 m-6 md:flex-row md:justify-content-around md:gap-2">
                <div className="project flex align-items-center" ref={refProject1}>
                    <p className="mb-3">A Pet 4 Life</p>
                    <img
                        className="project__img w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl"
                        src={apet4life}
                        alt="aPet4Life"
                    />
                    <p className="mb-3">
                        Projet réalisé en fin de formation DWWM
                    </p>
                    <a
                        className="project__link project__link--first"
                        href="https://apet4life.huiitre.fr/"
                        target="_blanc"
                    >
                        Lien vers le site
                    </a>
                    <a
                        className="project__link"
                        href="https://github.com/Morgane-Rabiller/apet4life-back"
                        target="_blanc"
                    >
                        Lien vers le Github du backend
                    </a>
                </div>
                <div className="project flex align-items-center" ref={refProject2}>
                    <p className="project__title">O'MY BAND</p>
                    <img className="project__img  w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl" src={omyband} alt="omyband" />
                    <p className="mb-3">
                        Projet réalisé en fin de formation CDA et continué en projet personnel
                    </p>
                    <a className="project__link project__link--first" href="https://omyband.mogo-r.fr" target="_blanc">
                        Lien vers le site
                    </a>
                    <a className="project__link project__link--first" href="https://github.com/Morgane-Rabiller/omyband-back" target="_blanc">
                        Lien vers le github (back-end)
                    </a>
                    <a className="project__link" href="https://github.com/Morgane-Rabiller/omyband-front" target="_blanc">
                        Lien vers le github (front-end)
                    </a>
                </div>
                <div className="project flex align-items-center" ref={refProject3}>
                    <p className="project__title">O'MY BAND</p>
                    <img className="project__img  w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl" src={oboardgame} alt="omyband" />
                    <p className="mb-3">
                        Projet personnel
                    </p>
                    <a className="project__link project__link--first" href="https://github.com/Morgane-Rabiller/oboardgame-back" target="_blanc">
                        Lien vers le github (back-end en cours)
                    </a>
                    <a className="project__link" href="https://github.com/Morgane-Rabiller/oboardgame-front" target="_blanc">
                        Lien vers le github (front-end pas commencé)
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
