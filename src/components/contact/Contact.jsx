import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import Sendicon from '../home/icons/Sendicon'
import config from '../../../config.json'
import TickIcon from './icons/TickIcon';
import LoadingIcon from './icons/LoadingIcon';
import Card from './Card';

const Contact = () => {

    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ name: false, email: false, project: false });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (errors[name] && value.trim() !== "") {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

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

        if (newErrors.name || newErrors.email || newErrors.project) {
            return;
        }

        setLoading(true);

        emailjs
        .sendForm(
            config.EmailJS.ServiceID, 
            config.EmailJS.TemplateID, 
            form.current, {
                publicKey: config.EmailJS.PublicKEY,
            }
        )
        .then(() => {
            setLoading(false);
            setSent(true);
            setTimeout(() => setSent(false), 2000);
        })
        .catch(() => {
            setLoading(false);
        });

        setErrors({ name: false, email: false, project: false });
        e.target.reset();
    };
    
  return (
    <>
        <section className="contact section" id="contact">
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="700">
                <h2 className="section__title">Get in touch</h2>
                <span className="section__subtitle">Contact me</span>
            </div>

            <div className="contact__container container grid">
                <div className="contact__content" >
                    <h3 className="contact__title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">Ask me something</h3>

                    <div className="contact__info" >
                        <Card title="Email" card_data="francescode.01@gmail.com" link="mailto:francescode.01@gmail.com" icon="uil uil-at contact__card-icon"></Card>
                        <Card title="Telegram" card_data="t.me/fdm182" link="https://t.me/fdm182" icon="uil uil-telegram-alt contact__card-icon"></Card>
                        <Card title="Linkedin" card_data="in/francesco-de-micco/" link="https://www.linkedin.com/in/francesco-de-micco-b55034210/" icon="uil uil-linkedin contact__card-icon"></Card>
                    </div>
                </div>

                <div className="contact__content" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">
                    <h3 className="contact__title">Write me your projects</h3>

                    <form className="contact__form" ref={form} onSubmit={sendEmail} autoComplete="off">
                        <div className={`contact__form-div${errors.name ? " contact__form-error" : ""}`}>
                            <label className="contact__form-tag">Name</label>
                            <input 
                                type="text"
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name' 
                                 onChange={handleInputChange}
                            />
                        </div>

                        <div className={`contact__form-div${errors.email ? " contact__form-error" : ""}`}>
                            <label className="contact__form-tag">Mail</label>
                            <input 
                                type='email'
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your email' 
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={`contact__form-div contact__form-area${errors.project ? " contact__form-error" : ""}`}>
                            <label className="contact__form-tag ">Project</label>
                            <textarea 
                                name='project'
                                cols={30}
                                rows={10}
                                className='contact__form-input'
                                placeholder="Write you're project idea" 
                                onChange={handleInputChange}
                            />
                        </div>

                        <button
                            className={`button button--flex contact__send-btn${sent ? " sent" : ""}`}
                            type="submit"
                            style={{ position: "relative", overflow: "hidden", minWidth: 160, minHeight: 48 }}
                            disabled={loading}
                        >
                            <span style={{ marginRight: 8 }}>
                                Send message
                            </span>
                            <span className={`icon-wrapper${loading ? " fade-in" : sent ? " fade-out" : " fade-in"}`}>
                                {loading && <LoadingIcon />}
                                {!loading && !sent && <Sendicon />}
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