import { useState,useEffect, useRef } from "react";
import "./styles.scss";
import apet4life from "src/assets/img/projects/apet4life.png";
import omyband from "src/assets/img/projects/omyband.png";
import oboardgame from "src/assets/img/projects/oboardgame.png";
import Typewriter from "typewriter-effect";

const Projects = () => {
  const refProject1 = useRef();
  const refProject2 = useRef();
  const refProject3 = useRef();
  const text = "Voilà les principaux projets que j'ai mis en place durant mes formations et personnellement.";

  useEffect(() => {
    window.setTimeout(() => {
      refProject1.current.style.transition = "3s";
      refProject1.current.style.opacity = 1;
      refProject2.current.style.transition = "3s";
      refProject2.current.style.opacity = 1;
      refProject3.current.style.transition = "3s";
      refProject3.current.style.opacity = 1;
    }, 1000)
  }, []);

  const showFullText = () => {
    setIsCompleted(true);  // Marque l'état comme "complété"
    typewriterRef.current?.stop();  // Stoppe le défilement de texte
  };

    return (
        <div className="pb-2 p-5 my-5 md:mx-8 text-center">
          <div className="flex align-items-center align-content-center">
            <p className="project__title font-bold text-5xl text-center mb-5  flex-1">MES PROJETS</p>
            </div>
            
            <div className="md:mb-6">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(text)
                        .start();
                }}
                options={{
                    autoStart: true,
                    delay: 16,
                    wrapperClassName: "font-semibold",
                }}
            />
            </div>

            <div className="project__content">
              <div className="flex mt-2 mb-3 flex-column md:flex-row md:flex-wrap md:justify-content-between md:gap-2">
                  <div className="project flex align-items-center mb-6 md:mb-3" ref={refProject1}>
                      <p className="project__title mb-3">A Pet 4 Life</p>
                      <img
                          className=" w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl h-18rem"
                          src={apet4life}
                          alt="aPet4Life"
                      />
                      <p className="mb-3 md:w-30rem">
                          Projet réalisé en fin de formation DWWM <br/><br/> Site permettant de recenser les associations animales afin que les particulier puissent en trouver facilement selon leur localisation.
                      </p>
                      <a
                          className="project__link"
                          href="https://github.com/Morgane-Rabiller/apet4life-back"
                          target="_blanc"
                      >
                          Lien vers le Github du backend
                      </a>
                  </div>
                  <div className="project flex align-items-center mb-6 md:mb-3" ref={refProject2}>
                      <p className="project__title mb-3">O'MY BAND</p>
                      <img className="  w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl h-18rem" src={omyband} alt="omyband" />
                      <p className="mb-3 md:w-30rem">
                          Projet réalisé en fin de formation CDA et continué en projet personnel <br/><br/> Site permettant aux musicien(ne)s et chanteurs/chanteuses ou groupe de musique de trouver des membres avec qui jouer.
                      </p>
                      <a className="project__link project__link--first" href="https://github.com/Morgane-Rabiller/omyband-back" target="_blanc">
                          Lien vers le github (back-end)
                      </a>
                      <a className="project__link" href="https://github.com/Morgane-Rabiller/omyband-front" target="_blanc">
                          Lien vers le github (front-end)
                      </a>
                  </div>
                  <div className="project flex align-items-center mb-6 md:mb-3" ref={refProject3}>
                      <p className="project__title mb-3">O'BoardGame</p>
                      <img className=" w-15rem md:w-17rem lg:w-25rem xl:w-30rem mb-3 border-round-3xl h-18rem" src={oboardgame} alt="omyband" />
                      <p className="mb-3 md:w-30rem">
                          Projet personnel <br/><br/> Application qui vise à sélectionner un jeu de société aléatoirement dans la bibliothèque personnelle des joueurs.
                      </p>
                      <a className="project__link project__link--first" href="https://oboardgame.mogo-r.fr/" target="_blanc">
                          Lien vers le site
                      </a>
                      <a className="project__link project__link--first" href="https://github.com/Morgane-Rabiller/oboardgame-back" target="_blanc">
                          Lien vers le github back-end
                      </a>
                      <a className="project__link project__link--third" href="https://github.com/Morgane-Rabiller/oboardgame-front" target="_blanc">
                          Lien vers le github front-end
                      </a>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default Projects;
