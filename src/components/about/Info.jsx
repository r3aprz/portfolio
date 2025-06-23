import React from 'react'
import Box from './Box'

const Info = () => {
  return (
    <div className="about__info grid">
        <Box title="Experience" subtitle="2 + years" icon="bx bxs-medal-star-alt about__icon"></Box>
        <Box title="Completed" subtitle="15 + project" icon="bx bx-briefcase-alt about__icon"></Box>
        <Box title="Support" subtitle="Online 24/7" icon="bx bx-headphone-mic about__icon"></Box>
    </div>
  )
}

export default Info