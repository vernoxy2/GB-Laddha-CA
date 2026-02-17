import React from 'react';
import Header from '../../Components/Header';
import TeamBg from "../../assets/TeamImg/TeamBg.png"
import Intro from './Components/Intro';
import Leadership from './Components/Leadership';
import Professional from './Components/Professional';
import Career from './Components/Career';
import Experts from './Components/Experts';


const Team = () => {
  return (
    <>
      <Header
        backgroundImage={TeamBg}
        title={"Our"}
        color={"Team"}
        subtitle={
          "A multidisciplinary team of professionals delivering ethical, reliable, and solution-driven expertise with consistency, collaboration, and client-focused excellence."
        }
      />
      <Intro />
      <Leadership/>
      <Professional/>
      <Experts/>
      <Career/>
    </>
  );
}

export default Team;
