import React from "react";
import Careerbg from "../../../assets/TeamImg/CareerBg.png";
import Titleline from "../../../Components/Titleline";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const Career = () => {
  const inputs = [
    { type: "text", placeholder: "First Name" },
    { type: "text", placeholder: "Last Name" },
    { type: "email", placeholder: "Email" },
    { type: "text", placeholder: "Phone" },
  ];

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
            Title="Career Section"
          />

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white max-w-xl mb-5"
          >
            Articleship & Career Opportunities
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white max-w-lg"
          >
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
              {inputs.map((field, i) => (
                <input data-aos="fade-up" key={i} {...field} />
              ))}
            </div>

            {["Job Applied For", "Job Applied For"].map((p, i) => (
              <input data-aos="fade-up" key={i} type="text" placeholder={p} />
            ))}

            <textarea
              data-aos="fade-up"
              className="w-full p-3"
              placeholder="Message"
              rows={4}
            />

            <div
              data-aos="fade-up"
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center w-full"
            >
              <input type="file" className="bg-white flex-shrink" />

              <PrimaryBtn
                BtnText="Send Message"
                className="h-full  flex-shrink-0"
              />
            </div>
             
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;
