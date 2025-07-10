import React, { useState, useEffect } from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {

  const [item, setItem] = useState ({name: 'All'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Aggiunto

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData);
    }
    else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({name: e.target.dataset.filter});
    setActive(index);
    setAnimationKey(prev => prev + 1); // Forza il re-render
  };

  return (
    <div>
      <div className="work__filters" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
              data-filter={item.name}
            >
              {item.name}
            </span>
          )
        })}
      </div>

      <div className="work__container container grid" key={animationKey}>
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id}></WorkItems>
        })}
      </div>
    </div>
  )
}

export default Works