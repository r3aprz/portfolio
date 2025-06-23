import React from 'react'

const LiElement = (props) => {
    const info = props.info;
    
  return (
    <>
        <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info">
                {info}
            </p>
        </li>
    </>
  )
}

export default LiElement