import { MeetMeSection } from './MeetMe.style';
import myself from '/images/me_tequila.jpeg'

const MeetMe = () => {
  return (
    <MeetMeSection>
      <h2>Meet Oscar</h2>
      <div>
        <img src={myself} alt="handsome Oscar Lopez at Tequila" />
        <p>I am a 24 year old software engineer from Chihuahua, Mexico. React enjoyer, but also a fan of reading about good practices and design patterns.</p>
      </div>
    </MeetMeSection>
  )
}

export default MeetMe