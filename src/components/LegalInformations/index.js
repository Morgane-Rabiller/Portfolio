import "./styles.scss";

const LegalInformations = () => {

    return (
        <div className="LI text-center p-5 my-0 md:mx-8">
          <h1 className="LI__title">Mentions légales</h1>
          <p>En vigueur au 17/01/2025 <br/><br/></p>
          <div className="LI__container h-20rem md:h-30rem p-3">
            <p>
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en l’économie
              numérique, il est porté à la connaissance des utilisateurs et visiteurs du site
              https://mogo-r.fr, les présentes mentions légales. <br/>
              La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans
              réserve des présentes mentions légales.<br/>
              Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales".
            </p>

            <h2 className="mt-5">EDITION DU SITE</h2>
            <p>
              L’édition et la direction de la publication du Site est assurée par Madame Morgane Rabiller, domiciliée
              64 Rue Jean Jaurès 44220 COUËRON, dont le numéro de téléphone est 0760750287, et l'adresse
              e-mail morganerabiller00@gmail.com. 
            </p>

            <h2 className="mt-5">HEBERGEUR</h2>
            <p>
              L'hébergeur du Site est la société O2switch, dont le siège social est situé au 63000 Clermont
              Ferrand .
            </p>

            <h2 className="mt-5">ACCES AU SITE</h2>
            <p>
              Le Site est normalement accessible, à tout moment, à l'Utilisateur. Toutefois, l'Editeur pourra, à tout
              moment, suspendre, limiter ou interrompre le Site afin de procéder, notamment, à des mises à jour ou
              des modifications de son contenu. L'Editeur ne pourra en aucun cas être tenu responsable des
              conséquences éventuelles de cette indisponibilité sur les activités de l'Utilisateur. <br/>
              Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
              sans autorisation expresse de l’Editeur est prohibée et pourra entraîner des actions et poursuites
              judiciaires telles que prévues par la règlementation en vigueur.
            </p>
          </div>
        </div>
    );
};

export default LegalInformations;
