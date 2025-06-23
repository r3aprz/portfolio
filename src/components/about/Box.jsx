import React from 'react'

const Box = (props) => {

    const title = props.title;
    const subtitle = props.subtitle;
    const icon = props.icon;

  return (
    <>
        <div className="about__box">
            <i className={icon}></i>
            <h3 className="about__title">{title}</h3>
            <span className="about__subtitle">{subtitle}</span>
        </div>
    </>
  )
}

export default Box