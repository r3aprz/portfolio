import React from 'react'

const WorkItems = ({item}) => {
  // Determina lo stile del container in base ai bottoni disponibili
  const buttonsStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    justifyContent: item.demo && item.github ? 'space-between' : 'flex-end'
  };

  return (
    <div className="work__card" key={item.id} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
        <img src={item.image} alt={item.title} className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <p className='work__description'>{item.description}</p>
        <div className="work__languages">
            {item.languages && item.languages.map((language, index) => (
                <span key={index} className="work__language">
                    <i className={language}></i>
                </span>
            ))}
        </div>

        <div className="work__buttons" style={buttonsStyle}>
            {item.demo && (
                <a href={item.demo} target="_blank" rel="noopener noreferrer" className="work__button">
                    Live Demo <i className="uil uil-arrow-right work__button-icon"></i>
                </a>
            )}
            {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="work__button">
                    Code <i className="uil uil-github-alt"></i> <i className="uil uil-arrow-right work__button-icon"></i>
                </a>
            )}
        </div>
    </div>
  )
}

export default WorkItems