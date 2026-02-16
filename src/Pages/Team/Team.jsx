import React from 'react';
import Header from '../../Components/Header';
import TeamBg from "../../assets/TeamImg/TeamBg.png"


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
    </>
  );
}

export default Team;
