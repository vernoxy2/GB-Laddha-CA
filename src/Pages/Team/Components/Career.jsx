import React from "react";
import Careerbg from "../../../assets/TeamImg/CareerBg.png";
import Titleline from "../../../Components/Titleline";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const Career = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Careerbg})` }}
      className="mb-16 bg-cover"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="pt-10">
          <Titleline
            className="justify-start"
            className2="text-white"
            Title={"Career Section"}
          />
          <h2 className="text-white max-w-xl mb-5">
            Articleship & Career Opportunities
          </h2>
          <p className="text-white max-w-lg">
            We offer a professional environment that supports learning, hands-on
            exposure, and ethical practice. Articles and professionals work
            closely with experienced mentors across taxation, audit, compliance,
            and advisory assignments—building strong foundations for long-term
            careers.
          </p>
        </div>
        <div>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <input
                type="text"
                placeholder="First Name"
              />
              <input
                type="text"
                placeholder="Last Name"
              />
              <input type="email" placeholder="Email"  />
              <input type="text" placeholder="Phone"  />
            </div>
            <input
              type="text"
              placeholder="Job Applied For"
            />
            <input
              type="text"
              placeholder="Job Applied For"
            />
            <textarea
              className="w-full p-3 "
              placeholder="Message"
              rows={4}
            ></textarea>
            <div className="flex gap-8 items-center">
              <input type="file" className="bg-white flex-1" />

              <PrimaryBtn
                BtnText="Send Message"
                className="whitespace-nowrap"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;
