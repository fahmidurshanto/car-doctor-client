import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute left-2/4 border-2 p-3 bg-white border-white top-1/2"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-orange-500 my-10 text-3xl font-semibold">
            About us
          </h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <div className="p-5">
            <p className="py-6 text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6 text-gray-400">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
          </div>
          <button className="btn bg-orange-600 text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
