import React from "react";
import LazyImage from "./LazyImage";
import PrimaryBtn from "./PrimaryBtn";
import Modal from "./Modal";

const PrimaryServiceCard = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Left Content */}
        <div className="p-7 pl-10 flex flex-col justify-between ">
          <div>
            <h4 className="text-lg font-semibold text-primaryStart mb-4">
              {service.title}
            </h4>
            <ul className="space-y-2 list-disc list-inside">
              {service.details.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <PrimaryBtn to="/services" BtnText="Consult Our Experts" />
          </div>
        </div>

        {/* Right Image */}
        <LazyImage
          src={service.cardImage}
          alt={service.title}
          className="rounded-r-xl object-cover w-full h-full hidden sm:block"
        />
      </div>
    </Modal>
  );
};

export default PrimaryServiceCard;