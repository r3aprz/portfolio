import React from 'react'
import './techcarousel.css'
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiPython, 
  DiJava, 
  DiGit,
  DiMongodb,
  DiMysql,
  DiLinux,
  DiDocker
} from 'react-icons/di'
import { 
  SiTypescript, 
  SiVuedotjs,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiKubernetes
} from 'react-icons/si'

const TechCarousel = () => {
  // Array di icone tecnologie con i loro componenti react-icons
  const techIcons = [
    { name: 'HTML5', Icon: DiHtml5, class: 'html' },
    { name: 'CSS3', Icon: DiCss3, class: 'css' },
    { name: 'JavaScript', Icon: DiJavascript1, class: 'js' },
    { name: 'React', Icon: DiReact, class: 'react' },
    { name: 'Node.js', Icon: DiNodejs, class: 'node' },
    { name: 'Python', Icon: DiPython, class: 'python' },
    { name: 'Java', Icon: DiJava, class: 'java' },
    { name: 'C++', Icon: SiCplusplus, class: 'cpp' },
    { name: 'Git', Icon: DiGit, class: 'git' },
    { name: 'Docker', Icon: DiDocker, class: 'docker' },
    { name: 'MongoDB', Icon: DiMongodb, class: 'mongo' },
    { name: 'MySQL', Icon: DiMysql, class: 'mysql' },
    { name: 'Linux', Icon: DiLinux, class: 'linux' },
    { name: 'TypeScript', Icon: SiTypescript, class: 'ts' },
    { name: 'Vue.js', Icon: SiVuedotjs, class: 'vue' },
    { name: 'Next.js', Icon: SiNextdotjs, class: 'nextjs' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, class: 'tailwind' },
    { name: 'PostgreSQL', Icon: SiPostgresql, class: 'postgres' },
    { name: 'Redis', Icon: SiRedis, class: 'redis' },
    { name: 'GraphQL', Icon: SiGraphql, class: 'graphql' },
    { name: 'Kubernetes', Icon: SiKubernetes, class: 'kubernetes' }
  ]

  // Duplico l'array per creare l'effetto infinito
  const duplicatedIcons = [...techIcons, ...techIcons]

  return (
    <div className="tech-carousel" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" >
      <div className="carousel-container">
        <div className="carousel-track">
          {duplicatedIcons.map((tech, index) => {
            const IconComponent = tech.Icon
            return (
              <div 
                key={`${tech.name}-${index}`} 
                className={`tech-icon ${tech.class}`}
                title={tech.name}
              >
                <IconComponent className="icon-component" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechCarousel
