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
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange-600 text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
