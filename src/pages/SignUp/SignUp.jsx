import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user) {
          toast("User created successful");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error.message);
        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          toast("Email already in use");
          return;
        } else if (
          errorMessage ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          toast("Password should be at least 6 characters");
          return;
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <ToastContainer></ToastContainer>
      <div className="hero-content flex justify-center items-center">
        <img className="hidden md:flex w-1/2" src={img} />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mx-auto px-10 mt-8">
            Sign up now!
          </h1>

          {/* Registration form */}
          <form className="card-body" onSubmit={handleSignUp}>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
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
            {/* Password */}
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
                Sign Up
              </button>
            </div>
          </form>
          <p className="mx-auto mb-8">
            Already have an account on <br />
            <strong className="text-orange-500">
              Car Doctors?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </strong>{" "}
            here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
