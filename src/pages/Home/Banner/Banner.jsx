import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full my-10 ">
      <div id="slide1" className="carousel-item relative w-full h-[600px] ">
        <img src={img1} className="w-full rounded-lg " />
        <div
          className="absolute h-full left-0 top-0 pl-12 pt-16  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... 
         "
        >
          <div
            className="space-y-8 w-full h-full 
          "
          >
            <h2 className="text-6xl text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="my-6">
              <button className="btn text-white bg-orange-500 border-none mr-4">
                Discover More
              </button>
              <button className="btn bg-white text-black">
                Latest Project
              </button>
            </div>
            <div>
              <a
                href="#slide4"
                className="btn btn-circle mr-5 bg-orange-500 border-none"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-orange-500 border-none"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full rounded-lg" />
        <div
          className="absolute h-full left-0 top-0 pl-12 pt-16  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... 
         "
        >
          <div
            className="space-y-8 w-full h-full 
          "
          >
            <h2 className="text-6xl text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="my-6">
              <button className="btn text-white bg-orange-500 border-none mr-4">
                Discover More
              </button>
              <button className="btn bg-white text-black">
                Latest Project
              </button>
            </div>
            <div>
              <a
                href="#slide1"
                className="btn btn-circle mr-5 bg-orange-500 border-none"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-orange-500 border-none"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={img3} className="w-full rounded-lg" />
        <div
          className="absolute h-full left-0 top-0 pl-12 pt-16  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... 
         "
        >
          <div
            className="space-y-8 w-full h-full 
          "
          >
            <h2 className="text-6xl text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="my-6">
              <button className="btn text-white bg-orange-500 border-none mr-4">
                Discover More
              </button>
              <button className="btn bg-white text-black">
                Latest Project
              </button>
            </div>
            <div>
              <a
                href="#slide2"
                className="btn btn-circle mr-5 bg-orange-500 border-none"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-orange-500 border-none"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full rounded-lg" />
        <div
          className="absolute h-full left-0 top-0 pl-12 pt-16  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00) 100%)] ... 
         "
        >
          <div
            className="space-y-8 w-full h-full 
          "
          >
            <h2 className="text-6xl text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="my-6">
              <button className="btn text-white bg-orange-500 border-none mr-4">
                Discover More
              </button>
              <button className="btn bg-white text-black">
                Latest Project
              </button>
            </div>
            <div>
              <a
                href="#slide3"
                className="btn btn-circle mr-5 bg-orange-500 border-none"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-orange-500 border-none"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
