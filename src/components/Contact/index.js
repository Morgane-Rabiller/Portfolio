import { useState, useEffect } from 'react';
import './styles.scss';
import insta from 'src/assets/img/contact/instagram.png';
import mail from 'src/assets/img/contact/mail.png';
import linkedin from 'src/assets/img/contact/linkedin.png';
import github from 'src/assets/img/contact/github.png';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après le montage du composant
    setIsVisible(true);
  }, []);

  return (
    <div className={`contact my-6 mx-auto p-5 text-center w-12 md:w-9 lg:w-6 xl:w-4 ${isVisible ? 'visible' : ''}`}>
      <p className="font-bold text-2xl text-center mb-5">ME CONTACTER</p>
      <div>
        <div className='flex align-items-center justify-content-start mb-3'>
          <p>Vous avez une question, une demande d'information ou de projet ?</p>
        </div>
        <div className='flex align-items-center justify-content-start mb-3'>
          <img className='w-3rem mr-3' src={mail} alt="mail" />
          <p>morganerabiller00@gmail.com</p>
        </div>
        <div className='flex align-items-center justify-content-start mb-3'>
          <img className='w-3rem mr-3' src={linkedin} alt="linkedin" />
          <a className='hover:underline' href='https://www.linkedin.com/in/morgane-rabiller-996a28225/'>Morgane Rabiller</a>
        </div>
        <div className='flex align-items-center justify-content-start mb-3'>
          <img className='w-3rem mr-3' src={insta} alt="instagram" />
          <a className='hover:underline' href='https://www.instagram.com/mogo.code/'>mogo.code</a>
        </div>
        <div className='flex align-items-center justify-content-start mb-3'>
          <img className='w-3rem mr-3' src={github} alt="github" />
          <a className='hover:underline' href='https://github.com/Morgane-Rabiller'>Morgane-Rabiller</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
