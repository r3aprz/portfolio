import React from 'react'
import './techcarousel.css'
import { 
  DiApple,
  DiCss3,
  DiDebian,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJava,
  DiJsBadge,
  DiJqueryLogo,
  DiLinux,
  DiMysql,
  DiNodejs,
  DiNpm,
  DiPhp,
  DiPython,
  DiReact,
  DiTerminal,
  DiUbuntu,
  DiWindows
} from 'react-icons/di'
import { 
  SiApache,
  SiArduino,
  SiBootstrap,
  SiCplusplus,
  SiDotnet,
  SiFlask,
  SiMariadb,
  SiRaspberrypi,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from 'react-icons/si'

// Componente per icone DevIcon CDN
const DevIcon = ({ iconClass, className }) => (
  <i className={`${iconClass} ${className}`}></i>
)

const TechCarousel = () => {
  // Array di icone tecnologie con i loro componenti react-icons
  const techIcons = [
    { name: 'Apache', Icon: SiApache, class: 'apache' },
    { name: 'Apple', Icon: DiApple, class: 'apple' },
    { name: 'Arduino', Icon: SiArduino, class: 'arduino' },
    { name: 'Bootstrap', Icon: SiBootstrap, class: 'bootstrap' },
    { name: 'C', Icon: DevIcon, iconClass: 'devicon-c-plain', class: 'c' },
    { name: 'C++', Icon: SiCplusplus, class: 'cpp' },
    { name: 'C#', Icon: DevIcon, iconClass: 'devicon-csharp-plain', class: 'csharp' },
    { name: 'CSS3', Icon: DiCss3, class: 'css' },
    { name: 'Debian', Icon: DiDebian, class: 'debian' },
    { name: 'Flask', Icon: SiFlask, class: 'flask' },
    { name: 'Git', Icon: DiGit, class: 'git' },
    { name: 'GitHub', Icon: DiGithubBadge, class: 'github' },
    { name: 'HTML5', Icon: DiHtml5, class: 'html' },
    { name: 'Java', Icon: DiJava, class: 'java' },
    { name: 'JavaScript', Icon: DiJsBadge, class: 'js' },
    { name: 'jQuery', Icon: DiJqueryLogo, class: 'jquery' },
    { name: 'Linux', Icon: DiLinux, class: 'linux' },
    { name: 'MariaDB', Icon: SiMariadb, class: 'mariadb' },
    { name: 'MySQL', Icon: DiMysql, class: 'mysql' },
    { name: '.NET', Icon: SiDotnet, class: 'dotnet' },
    { name: 'Node.js', Icon: DiNodejs, class: 'node' },
    { name: 'NPM', Icon: DiNpm, class: 'npm' },
    { name: 'PHP', Icon: DiPhp, class: 'php' },
    { name: 'Python', Icon: DiPython, class: 'python' },
    { name: 'Raspberry Pi', Icon: SiRaspberrypi, class: 'raspberrypi' },
    { name: 'React', Icon: DiReact, class: 'react' },
    { name: 'SQLite', Icon: SiSqlite, class: 'sqlite' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, class: 'tailwind' },
    { name: 'TypeScript', Icon: SiTypescript, class: 'ts' },
    { name: 'Terminal', Icon: DiTerminal, class: 'terminal' },
    { name: 'Ubuntu', Icon: DiUbuntu, class: 'ubuntu' },
    { name: 'Vite', Icon: SiVite, class: 'vitejs' },
    { name: 'Windows', Icon: DiWindows, class: 'windows' }
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
                {tech.iconClass ? (
                  <IconComponent iconClass={tech.iconClass} className="icon-component" />
                ) : (
                  <IconComponent className="icon-component" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechCarousel
