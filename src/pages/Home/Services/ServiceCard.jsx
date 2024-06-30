import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service?.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex items-center justify-between w-full">
          <p className="font-bold text-orange-500">Price: {service?.price}</p>
          <FaArrowRight className="text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
