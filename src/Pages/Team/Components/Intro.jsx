import React from "react";
import Titleline from "../../../Components/Titleline";
import TeamIntro from "../../../assets/TeamImg/TeamIntro.png";
import LazyImage from "../../../Components/LazyImage";

const Intro = () => {
  return (
    <section className="container space-y-0">
      <Titleline className="justify-center" Title={"team introduction"} />

      <div className="relative w-full overflow-hidden rounded-xl">
        
        {/* Image */}
        <LazyImage
          src={TeamIntro}
          alt="team introduction"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center space-y-4 sm:space-y-6">
            
            <p className="text-white leading-relaxed">
              <span className="text-gradient-primary font-bold">
                At G. B. Laddha & Co. LLP,
              </span>{" "}
              our strength lies in the people behind our services. Our firm is
              supported by a diverse team of Chartered Accountants, Company
              Secretaries, MBAs, Cost Accountants, executives, and trained audit
              and article assistants, working together with a shared commitment
              to quality and integrity.
            </p>

            <p className="text-white leading-relaxed">
              With deep technical expertise and hands-on industry exposure, our
              team brings a disciplined, solution-oriented approach to every
              engagement. We believe in collaboration, continuous learning, and
              professional ethics—ensuring that clients receive reliable advice,
              timely execution, and consistent support across all assignments.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
