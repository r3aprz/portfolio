import React, { useEffect, useRef, useState } from 'react'

const skills = [
  // IDE
  { name: "VScode", percent: 90, className: "skills__html_css_js" },
  { name: "Visual Studio", percent: 80, className: "skills__c" },
  { name: "CLion", percent: 70, className: "skills__clion" },
  { name: "PyCharm", percent: 80, className: "skills__c" },
  { name: "Vi/Vim/Nano", percent: 70, className: "skills__clion" },
  // OS
  { name: "Linux (ParrotOS, Kali)", percent: 95, className: "skills__linux" },
  { name: "Windows", percent: 90, className: "skills__html_css_js" },
  { name: "MacOS", percent: 80, className: "skills__c" },
];

const IDE_OS = () => {
  const [progress, setProgress] = useState(Array(skills.length).fill(0));
  const containerRef = useRef(null);

  // Animazione sequenziale smooth
  const animate = async () => {
    for (let i = 0; i < skills.length; i++) {
      for (let p = 0; p <= skills[i].percent; p += 3) {
        setProgress(prev => {
          const updated = [...prev];
          updated[i] = Math.min(p, skills[i].percent);
          return updated;
        });
        await new Promise(res => setTimeout(res, 5));
      }
      await new Promise(res => setTimeout(res, 100));
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgress(Array(skills.length).fill(0)); // reset
          setTimeout(() => {
            animate();
          }, 1000); // ritardo di 1000ms
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Dividi IDE e OS per la visualizzazione
  const ideSkills = skills.slice(0, 5);
  const osSkills = skills.slice(5);

  return (
    <div className="skills__content" ref={containerRef} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
      <h3 className="skills__title">IDE and OS</h3>
      <div className="skills__box">
        <div className="skills__group" style={{ marginBottom: "3rem" }}>
          {ideSkills.map((skill, idx) => (
            <div key={skill.name}>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div className="skills__row">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.percent}%</span>
                </div>
              </div>
              <div className="skills__bar">
                <span
                  className={`skills__percentage ${skill.className}`}
                  style={{
                    width: `${progress[idx]}%`,
                    transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)'
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group" style={{ paddingTop: "1.5rem", borderTop: "1px solid #b5b5b5", marginTop: "-1rem"}}>
          {osSkills.map((skill, idx) => (
            <div key={skill.name}>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div className="skills__row">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.percent}%</span>
                </div>
              </div>
              <div className="skills__bar">
                <span
                  className={`skills__percentage ${skill.className}`}
                  style={{
                    width: `${progress[idx + ideSkills.length]}%`,
                    transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)'
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IDE_OS