import React from 'react'

const Frontend = () => {
  return (
    <>
        <div className="skills__content">
            <h3 className="skills__title">Frontend developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <div className="skills__level">Advanced</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <div className="skills__level">Advanced</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <div className="skills__level">Advanced</div>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <div className="skills__level">Base</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <div className="skills__level">Intermediate</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Tailwindcss</h3>
                            <div className="skills__level">Base</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Frontend