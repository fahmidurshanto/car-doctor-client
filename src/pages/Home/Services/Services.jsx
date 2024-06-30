import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center space-y-5 my-10">
      <h3 className="text-2xl text-orange-600 font-bold">Services</h3>
      <h2 className="text-5xl ">Our Service Area</h2>
      <p className="text-gray-400">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div>
        <h3 className="text-2xl font-bold">
          Total services: {services.length}
        </h3>
        <div className="grid md:grid-cols-2 p-5 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
