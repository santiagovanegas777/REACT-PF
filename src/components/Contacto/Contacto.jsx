import React, { useRef, useState } from 'react';
import '../../styles/Contacto/main.css';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"

const Contacto = () => {
  const form = useRef();

  const [nameClass, setNameClass] = useState("input")
  const [emailClass, setEmailClass] = useState("input")
  const [textClass, setTextClass] = useState("message_area")
  const handleNameInput = (event) => {
    if (event.target.value !== "") {
      setNameClass("input has_value")
    } else {
      setNameClass("input")
    }
  }
  const handleEmailInput = (event) => {
    if (event.target.value !== "") {
      setEmailClass("input has_value")
    } else {
      setEmailClass("input")
    }
  }

  const handleTextInput = (event) => {
    if (event.target.value !== "") {
      setTextClass("message_area has_value")
    } else {
      setTextClass("message_area")
    }
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2zfnijr', 'template_1qyko6a', form.current, 'WD4OVH6ubbz0jxDRK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='background'>
      <section className='section_form'>
        <h1 className='titulo_contacto'>Contacto</h1>
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <div className='contact_information'>
            <span className='contact_mail'><FaEnvelope /> contactmail@gmail.com</span>
            <span className='contact_telf'><FaPhoneAlt /> 033-731</span>
            <div className="redes_sociales">
              <div className="instagram"></div>
              <div className="twitter"></div>
              <div className="facebook"></div>
            </div>
          </div>
          <div className='content'>
            <div className='content_box'>
              <input onInput={handleNameInput} type="text" name="user_name" className={nameClass} />
              <label htmlFor='user_name' className='label_name'>Name</label>
            </div>
            <div className='content_box'>
              <input onInput={handleEmailInput} type="email" name="user_email" className={emailClass} />
              <label htmlFor='user_email' className='label_email'>Email</label>
            </div>

            <div className='message_box'>

              <textarea onInput={handleTextInput} name="message" className={textClass} />
              <label htmlFor='message' className='label_message'>Message</label>
            </div>
            <input type="submit" value="Send" className='submit_button' />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacto;