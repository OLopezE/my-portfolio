import React from 'react'

import workExperience from 'src/js/api/workExperience/workExperience'

import {
  WorkExperienceGrid,
  TitleContainer,
  WorkContainer,
  WorkButton
} from './Experience.style'

const WorkCard = ({ work }) => {
  return (
    <div>
      <WorkButton>{work.jobTitle} ({work.startDate + ' to ' + work.endDate})</WorkButton>
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