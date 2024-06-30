import { FaCalendarAlt } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="flex justify-center items-center gap-5 bg-black w-[85%] mx-auto rounded-lg py-4 mb-10">
      {/* Timing */}
      <div className=" flex justify-start items-center gap-3 p-5">
        <FaCalendarAlt className="text-white text-5xl"></FaCalendarAlt>
        <div>
          <p className="text-xl  text-white">We are open monday-friday</p>
          <h4 className="text-2xl text-white font-bold">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      {/* Have a question? */}
      <div className="flex justify-start items-center gap-3 p-5">
        <FcPhone className=" text-5xl"></FcPhone>
        <div>
          <p className="text-xl  text-white">Have a question?</p>
          <h4 className="text-2xl text-white font-bold">+2546 251 2658</h4>
        </div>
      </div>
      {/*Address */}
      <div className=" flex justify-start items-center gap-3 p-5">
        <ImLocation2 className="text-green-500 text-5xl"></ImLocation2>
        <div>
          <p className="text-xl  text-white">Need a repair? our address</p>
          <h4 className="text-2xl text-white font-bold">
            Liza Street, New York
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
