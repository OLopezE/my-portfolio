import React, { useState, Fragment } from 'react'

import workExperience from 'src/js/api/workExperience/workExperience'

import {
  WorkExperienceGrid,
  TitleContainer,
  WorkContainer,
  WorkButton
} from './Experience.style'

const WorkCard = ({ work }) => {
  const [isDescriptionVisible, toggleDescription] = useState(false);
  return (
    <div>
      <WorkButton
        onClick={() => toggleDescription(!isDescriptionVisible)}
      >
        {work.jobTitle} ({work.startDate + ' to ' + work.endDate} @ {work.company})
      </WorkButton>
      { isDescriptionVisible && (
        <ul>
          {work.description.map(
            bulletPoint => (
              <li>{bulletPoint}</li>
            )
          )}
        </ul>
      )}
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