import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social></Social>
                <div className="home__img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" ></div>
                <Data></Data>
            </div>

            <ScrollDown></ScrollDown>
        </div>
    </section>
  )
}

export default Home