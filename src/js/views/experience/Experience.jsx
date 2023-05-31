import React from 'react'

import workExperience from 'src/js/api/workExperience/workExperience'

import { WorkExperienceGrid, TitleContainer, WorkContainer } from './Experience.style'

const WorkCard = ({ work }) => {
  return (
    <div>
      <h3>{work.jobTitle}</h3>
      <button>Select</button>
    </div>
  )
};

const Experience = () => {
  return (
    <WorkExperienceGrid>
      <TitleContainer>
        <h1>Professional Experience</h1>
      </TitleContainer>
      <WorkContainer>
        {workExperience.map((work) => (<WorkCard work={work}  />))}
      </WorkContainer>
    </WorkExperienceGrid>
  )
}

export default Experience