import './styles.scss';
import tel from 'src/assets/img/contact/tel.png';
import adress from 'src/assets/img/contact/adress.png';
import mail from 'src/assets/img/contact/mail.png';
import linkedin from 'src/assets/img/contact/linkedin.png';
import github from 'src/assets/img/contact/github.png';

const Contact = () => (
  <div className="contact my-6 mx-auto p-5 text-center w-12 md:w-9 lg:w-6 xl:w-4">
    <p className="font-bold text-2xl text-center mb-5">ME CONTACTER</p>
    <div>
      <div className='flex align-items-center justify-content-start mb-3'>
        <img className='w-3rem mr-3' src={adress} alt="adress" />
        <p>Couëron</p>
      </div>
      <div className='flex align-items-center justify-content-start mb-3'>
        <img className='w-3rem mr-3' src={mail} alt="mail" />
        <p>morganerabiller@yahoo.fr</p>
      </div>
      <div className='flex align-items-center justify-content-start mb-3'>
        <img className='w-3rem mr-3' src={linkedin} alt="linkedin" />
        <a className='hover:underline' href='https://www.linkedin.com/in/morgane-rabiller-996a28225/'>Morgane Rabiller</a>
      </div>
      <div className='flex align-items-center justify-content-start mb-3'>
        <img className='w-3rem mr-3' src={github} alt="github" />
        <a className='hover:underline' href='https://github.com/Morgane-Rabiller'>Morgane-Rabiller</a>
      </div>
    </div>
  </div>
)

export default Contact;
