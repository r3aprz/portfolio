import React from 'react'
import Box from './Box'

const Info = () => {
  return (
    <div className="about__info grid">
        <Box title="Frontend" subtitle="Clean & elegant UX" icon="uil uil-web-grid about__icon"></Box>
        <Box title="Backend" subtitle="High-speed logic" icon="uil uil-setting about__icon"></Box>
        <Box title="Database" subtitle="Optimized storage" icon="uil uil-database about__icon"></Box>
    </div>
  )
}

export default Info