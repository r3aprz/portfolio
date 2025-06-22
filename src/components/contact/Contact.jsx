import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import Sendicon from '../home/icons/Sendicon'
import config from '../../../config.json'

// Tick icon SVG component
const TickIcon = () => (
  <svg width="24" height="24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 10 18 4 12" />
  </svg>
);

const Contact = () => {

    const form = useRef();
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({ name: false, email: false, project: false });

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current['name'].value.trim();
        const email = form.current['email'].value.trim();
        const project = form.current['project'].value.trim();

        const newErrors = {
            name: !name,
            email: !email,
            project: !project
        };
        setErrors(newErrors);

        // Se almeno un campo è vuoto, non inviare
        if (newErrors.name || newErrors.email || newErrors.project) {
            return;
        }

        emailjs
        .sendForm(
            config.EmailJS.ServiceID, 
            config.EmailJS.TemplateID, 
            form.current, {
                publicKey: config.EmailJS.PublicKEY,
            }
        )
        .then(() => {
            setSent(true);
            setTimeout(() => setSent(false), 2000); // Show tick for 2 seconds
        })
        .catch(() => {
            // handle error if needed
        });

        setErrors({ name: false, email: false, project: false });
        e.target.reset();
    };

  return (
    <>
        <section className="contact section" id="contact">
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                <h2 className="section__title">Get in touch</h2>
                <span className="section__subtitle">Contact me</span>
            </div>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Ask me something</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="uil uil-at contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">francescode.01@gmail.com</span>

                            <a href="mailto:francescode.01@gmail.com" className="contact__button">
                                Write me
                                <i className="uil uil-arrow-right contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-telegram-alt contact__card-icon"></i>

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">t.me/fdm182</span>

                            <a href="https://t.me/fdm182" className="contact__button">
                                Write me
                                <i className="uil uil-arrow-right contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-linkedin contact__card-icon"></i>

                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">in/francesco-de-micco/</span>

                            <a href="https://www.linkedin.com/in/francesco-de-micco-b55034210/" className="contact__button">
                                Write me
                                <i className="uil uil-arrow-right contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Weite me your projects</h3>

                    <form className="contact__form" ref={form} onSubmit={sendEmail} autoComplete="off">
                        <div className={`contact__form-div${errors.name ? " contact__form-error" : ""}`}>
                            <label className="contact__form-tag">Name</label>
                            <input 
                                type="text"
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name' />
                        </div>

                        <div className={`contact__form-div${errors.email ? " contact__form-error" : ""}`}>
                            <label className="contact__form-tag">Mail</label>
                            <input 
                                type='email'
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your email' />
                        </div>

                        <div className={`contact__form-div contact__form-area${errors.project ? " contact__form-error" : ""}`}>
                            <label className="contact__form-tag ">Project</label>
                            <textarea 
                                name='project'
                                cols={30}
                                rows={10}
                                className='contact__form-input'
                                placeholder="Write you're project idea" />
                        </div>

                        <button
                            className={`button button--flex contact__send-btn${sent ? " sent" : ""}`}
                            type="submit"
                            style={{ position: "relative", overflow: "hidden", minWidth: 160, minHeight: 48 }}
                        >
                            <span style={{ marginRight: 8 }}>
                                Send message
                            </span>
                            <span className={`icon-wrapper${sent ? " fade-out" : " fade-in"}`}>
                                {!sent && <Sendicon />}
                            </span>
                            <span className={`icon-wrapper${sent ? " fade-in" : " fade-out"}`}>
                                {sent && <TickIcon />}
                            </span>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    </>
  )
}

export default Contact;