import React from 'react'

const Card = (pros) => {

    const title = pros.title;
    const card_data = pros.card_data;
    const link = pros.link;
    const icon = pros.icon;

    return (
        <>
            <div className="contact__card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <i className={icon}></i>

                <h3 className="contact__card-title">{title}</h3>
                <span className="contact__card-data">{card_data}</span>

                <a href={link} className="contact__button">
                    Write me
                    <i className="uil uil-arrow-right contact__button-icon"></i>
                </a>
            </div>
        </>
    )
}

export default Card