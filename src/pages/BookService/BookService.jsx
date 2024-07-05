import { useLoaderData } from "react-router-dom";
import bookBannerImg from "../../assets/images/checkout/checkout.png";

const BookService = () => {
  const serviceInfo = useLoaderData();
  console.log(serviceInfo);
  const { title, img } = serviceInfo;
  return (
    <div>
      <div className="my-10 mx-[3rem]">
        <div className="relative">
          <img
            className=" mx-auto w-full h-full rounded-md"
            src={bookBannerImg}
          />
          <div className="absolute h-full left-0 top-0   bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... ">
            <div>
              <h1 className="text-white text-3xl md:text-6xl pl-28 font-bold text-center pt-20">
                Book your service
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl  text-center my-10 ">
            Book service: <span className="font-bold">{title}</span>
          </h1>
          <form>
            <div className="grid md:grid-cols-2 gap-10">
              {/* first Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Your phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Your phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Your phone"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Your Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              className="input input-bordered bg-orange-600 text-white w-full my-10 font-bold"
              value="Book now"
            />
          </form>
        </div>
      </div>
      );
    </div>
  );
};

export default BookService;
