import React from 'react'

import workExperience from 'src/js/api/workExperience/workExperience'

function Experience() {
  return (
    <div>
      <h1>
        Professional Experience
      </h1>
      {workExperience.map((work) => (
        <p>{work.company}</p>
      ))}
    </div>
  )
}

export default Experience