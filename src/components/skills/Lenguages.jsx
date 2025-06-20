import React, { useEffect, useRef, useState } from 'react'

const skills = [
  { name: "C", percent: 80, className: "skills__c" },
  { name: "C++", percent: 85, className: "skills__cpp" },
  { name: "C#", percent: 80, className: "skills__csharp" },
  { name: "Java", percent: 80, className: "skills__java" },
  { name: "Python", percent: 85, className: "skills__python" },
  { name: "HTML, CSS, JS", percent: 90, className: "skills__html_css_js" },
  { name: "SQL", percent: 85, className: "skills__cpp" },
  { name: "Other Frameworks", percent: 80, className: "skills__other_framework" },
];

const Lenguages = () => {
  const [progress, setProgress] = useState(Array(skills.length).fill(0));
  const containerRef = useRef(null);

  // Funzione per animare le barre
  const animate = async () => {
    for (let i = 0; i < skills.length; i++) {
        for (let p = 0; p <= skills[i].percent; p += 3) { // passo più grande
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
    // eslint-disable-next-line
  }, []);

  return (
    <div className="skills__content" ref={containerRef} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
      <h3 className="skills__title">Lenguages known</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, idx) => (
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
                        transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)' // transizione più smooth
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

export default Lenguages