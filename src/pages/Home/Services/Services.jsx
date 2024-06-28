import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center space-y-5">
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
        <div className="grid md:grid-cols-2 p-5 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service._id} className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <p className="font-bold text-orange-500">
                    Price: {service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
