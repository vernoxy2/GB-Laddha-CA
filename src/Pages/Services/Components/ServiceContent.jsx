import Bullet from "../../../Components/Bullet";
import LazyImage from "../../../Components/LazyImage";
import Titleline from "../../../Components/Titleline";
import servicesData from "./Servicesdata.Js";

export default function ServiceContent({ service }) {
  const data = servicesData[service];

  const renderList = (title, items) =>
    title &&
    items?.length > 0 && (
      <>
        <h3
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl font-bold mb-4"
        >
          {title}
        </h3>

        <ul className="flex flex-col gap-6 shrink-0 mb-6">
          {items.map((item, idx) => (
            <li
              key={idx}
              data-aos="fade-right"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
              className="flex items-center gap-x-3 md:text-xl text-gray-600"
            >
              <Bullet />
              {item}
            </li>
          ))}
        </ul>
      </>
    );

  return (
    <div key={service} className="animate-fadeIn lg:w-10/12">
      <Titleline Title="Services" className="-mb-2" />

      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl font-bold mb-4 leading-tight"
      >
        Introduction <span className="text-gradient-primary">of services</span>
      </h2>

      <p data-aos="fade-up" data-aos-delay="100" className="mb-4">
       We offer a structured range of professional solutions that simplify statutory requirements and support informed business decisions. Our service portfolio covers compliance management, audits, regulatory filings, advisory, and dispute resolution—delivered through a disciplined and process-driven approach.
      </p>

      <p data-aos="fade-up" data-aos-delay="100">
       With decades of hands-on exposure across industries, we assist businesses in managing obligations efficiently while aligning financial practices with long-term operational goals.
      </p>

      <hr
        data-aos="fade-up"
        data-aos-delay="100"
        className="border-gray-100 mb-6"
      />

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="rounded-xl overflow-hidden mb-6 shadow-lg"
      >
        <LazyImage
          src={data.img}
          alt={data.title}
          className="w-full object-cover"
        />
      </div>

      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="font-bold text-gray-900 mb-4 leading-tight"
      >
        {data.title} <span className="text-cyan-500">{data.highlight}</span>
      </h2>

      <p data-aos="fade-up" data-aos-delay="100" className="mb-3">
        {data.intro}
      </p>
      <p data-aos="fade-up" data-aos-delay="100" className="mb-6">
        {data.detail}
      </p>

      {renderList(data.listTitle, data.items)}
      {renderList(data.listTitle2, data.items2)}
      {renderList(data.listTitle3, data.items3)}
    </div>
  );
}