import './styles.scss';
import tel from 'src/assets/img/contact/tel.png';
import adress from 'src/assets/img/contact/adress.png';
import mail from 'src/assets/img/contact/mail.png';
import linkedin from 'src/assets/img/contact/linkedin.png';
import github from 'src/assets/img/contact/github.png';

const Contact = () => (
  <div className="contact">
    <p className="contact__title">ME CONTACTER</p>
    <div className='contact__coords'>
      <div className='contact__coord'>
        <img className='contact__coord--img' src={tel} alt="phone" />
        <p> 07 60 75 02 87</p>
      </div>
      <div className='contact__coord'>
        <img className='contact__coord--img' src={adress} alt="adress" />
        <p>Couëron</p>
      </div>
      <div className='contact__coord'>
        <img className='contact__coord--img' src={mail} alt="mail" />
        <p>morganerabiller@yahoo.fr</p>
      </div>
      <div className='contact__coord'>
        <img className='contact__coord--img' src={linkedin} alt="linkedin" />
        <a className='contact__coord--link' href='https://www.linkedin.com/in/morgane-rabiller-996a28225/'>Morgane Rabiller</a>
      </div>
      <div className='contact__coord'>
        <img className='contact__coord--img' src={github} alt="github" />
        <a className='contact__coord--link' href='https://github.com/Morgane-Rabiller'>Morgane-Rabiller</a>
      </div>
    </div>
  </div>
)

export default Contact;
