import React from "react";

const officesdirectly = [
  {
    heading: "Head Office",
    city: "Vapi",
    address: "G. B. Laddha & Co. LLP  1–2, Second Floor, Sahara Market,Silvassa Road, Vapi – 396191, Gujarat",
    phone: "+91 83477 44411",
    email: "audit@gbladdha.com",
    manager: "CA Giriraj Laddha:",
    managerPhone: "+91 83477 44411",
  },
  {
    heading: "Branch Office",
    city: "Silvassa",
    address: "Office No. 214, Landmark Silvassa - 396230",
    phone: "+91 85610 43853",
    email: "silvassa@gbladdha.com",
    manager: "CA Rahul Modi",
  },
];

const OfficesDirect = () => {
  return (
    <section className="container ">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">
          Get in touch with us through the form below or contact our{" "}
          <span className="text-gradient-primary">
            offices directly
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {officesdirectly.map((office, index) => (
          <div
            key={index}
            className="p-8 border border-[#D8D8D8] rounded-lg space-y-3"
          >
            <h2 className="">{office.heading} - <span className="text-gradient-primary"> {office.city}</span> </h2>
            <p className="">
              
            </p>
            <p className="">
              {office.address}
            </p>
            <p className="">
               {office.phone}
            </p>
            <p className="">
               {office.manager}
               <span> {office.managerPhone ? ` (${office.managerPhone})` : ""}</span>
            </p>
            
            <p className="">
               {office.email}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficesDirect;
