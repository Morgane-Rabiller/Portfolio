import { useEffect, useRef } from "react";
import "./styles.scss";
import apet4life from "src/assets/img/projects/apet4life.png";
import omyband from "src/assets/img/projects/omyband.png";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const refProject1 = useRef();
  const refProject2 = useRef();

  useEffect(() => {
    window.setTimeout(() => {
      refProject1.current.style.transition = "5s";
      refProject1.current.style.opacity = 1;
      refProject2.current.style.transition = "5s";
      refProject2.current.style.opacity = 1;
    }, 3000)
  }, []);

    return (
        <div className="projects p-5 my-5 md:mx-8">
            <p className="font-bold text-2xl text-center mb-5">MES PROJETS</p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(
                            "Durant de mes deux formations j'ai pratiqué les notions appris dans divers projets proposés par la formation absolument tous les jours via différents challenges. Cependant, les principaux projets où on a pu mettre en pratique tout ce qu'on avait appris tout au long de l'année sont ceux que je présente ici."
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
                        className="project__link"
                        href="https://apet4life.huiitre.fr/"
                        target="_blanc"
                    >
                        Lien vers le site
                    </a>
                </div>
                <div className="project flex align-items-center" ref={refProject2}>
                    <p className="project__title">O'MY BAND</p>
                    <img className="project__img  w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl" src={omyband} alt="omyband" />
                    <p className="mb-3">
                        Projet réalisé en fin de formation CDA
                    </p>
                    <a className="project__link" href="" target="_blanc">
                        Lien à venir
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
