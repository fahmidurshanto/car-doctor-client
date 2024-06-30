import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user) {
          toast("Login successful");
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
        if (error === "Firebase: Error (auth/invalid-credential).") {
          toast("Invalid Email/Password");
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <ToastContainer />
      <div className="hero-content flex justify-center items-center">
        <img className="hidden md:flex w-1/2" src={img} />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mx-auto px-10 mt-8">Login now!</h1>

          {/* Login form */}
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="mx-auto mb-8">
            New to{" "}
            <strong className="text-orange-500">
              Car Doctors?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </strong>{" "}
            here!
          </p>
          <p className="text-center mb-3">Or Sign In with</p>
          <div className="flex justify-center items-center gap-4 mb-5">
            <FcGoogle className="text-3xl cursor-pointer"></FcGoogle>
            <TiSocialLinkedin className="text-3xl text-sky-600 cursor-pointer"></TiSocialLinkedin>
            <TiSocialFacebook className="text-3xl text-blue-700 cursor-pointer"></TiSocialFacebook>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
