import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, img } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex items-center justify-between w-full">
          <p className="font-bold text-orange-500">Price: {price}</p>
          <Link to={`/book/${_id}`}>
            <FaArrowRight className="text-orange-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
