const About = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-10 shadow-md shadow-gray-500 rounded-md my-10">
          <h3 className="font-bold text-2xl">About Car Doctor</h3>
          <p className="text-md text-justify text-gray-500">
            At Car Doctor, we understand that keeping your car running smoothly
            shouldn't break the bank. That's why we're dedicated to providing
            top-notch car servicing at affordable prices. We're a team of
            passionate and experienced mechanics who are committed to getting
            you back on the road quickly and safely.
          </p>
        </div>
        <div className="p-10 shadow-md shadow-gray-500 rounded-md my-10">
          <h3 className="font-bold text-2xl">Our mission</h3>
          <p className="text-md text-justify text-gray-500">
            Our mission is to be your trusted partner in car care. We believe in
            building long-term relationships with our customers by providing
            honest, reliable service. We take the time to explain any
            recommended repairs clearly and answer any questions you may have.
          </p>
        </div>
      </div>
      <div className="p-10 space-y-5 text-justify w-3/4 mx-auto shadow-md shadow-gray-600 my-10 rounded-md">
        <h2 className="text-2xl font-bold text-center">
          Why Choose Car Doctor?
        </h2>
        <p className="text-gray-500">
          <strong className="text-black">Affordability: </strong> We offer
          competitive rates on all our services, from routine maintenance to
          major repairs.
        </p>
        <p className="text-gray-500">
          <strong className="text-black">Expertise: </strong>Our mechanics are
          highly trained and experienced in working on all makes and models of
          cars.
        </p>
        <p className="text-gray-500">
          <strong className="text-black">Quality: </strong> We use only the
          highest quality parts and fluids to ensure your car is repaired to the
          highest standards.
        </p>
        <p className="text-gray-500">
          <strong className="text-black"> Convenience: </strong> We offer
          flexible appointment scheduling and comfortable waiting areas at our
          service centers.
        </p>
        <p className="text-gray-500">
          <strong className="text-black"> Customer Service: </strong> We pride
          ourselves on providing excellent customer service. Our friendly staff
          is always happy to help you with any questions or concerns you may
          have.
        </p>
      </div>

      <div>
        <div className=" w-2/3 mx-auto shadow-md shadow-gray-600 my-10 p-10">
          {" "}
          <h2 className="text-2xl font-bold text-center my-10">
            More Than Just Repairs
          </h2>
          <p className="text-gray-800 text-justify font-bold">
            At Car Doctor, we offer a wide range of services to keep your car
            running smoothly, including:
          </p>
          <ul className="list-disc ml-10 text-gray-500">
            <li>Oil changes</li>
            <li>Brake repairs</li>
            <li>Transmission repairs</li>
            <li>Engine repairs</li>
            <li>Electrical repairs</li>
            <li>Heating and cooling repairs</li>
          </ul>
        </div>
      </div>

      <div className="p-10 my-10">
        <h2 className="font-bold text-2xl">
          We look forward to being your car's doctor!
        </h2>
        <p className="text-gray-500 text-justify">
          We encourage you to browse our website to learn more about our
          services or contact us today to schedule an appointment.
        </p>
      </div>
    </div>
  );
};

export default About;
