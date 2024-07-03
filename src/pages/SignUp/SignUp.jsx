import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SignUp = () => {
  const { createUser, loading } = useContext(AuthContext);

  // google sign in
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      if (user) {
        toast(`${user.displayName} you are logged in successfully`);
      }
    });
  };

  // github login
  const githubSignIn = () => {
    loading;
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        const user = res.user;
        if (user) {
          toast(`${user.displayName} you are logged in successfully`);
        }
      })
      .catch((err) => {
        const error = err.message;
        if (error) {
          toast.error(error);
        }
      });
  };

  //  Twitter login
  const twitterSignIn = () => {
    loading;
    const twitterProvider = new TwitterAuthProvider();
    signInWithPopup(auth, twitterProvider)
      .then((res) => {
        const user = res.user;
        if (user) {
          toast(`${user.displayName} you are logged in successfully`);
        }
      })
      .catch((err) => {
        const error = err.message;
        if (error) {
          toast.error(error);
        }
      });
  };

  // facebook login
  const facebookSignIn = () => {
    loading;
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider).then((res) => {
      const user = res.user;
      if (user) {
        toast(`${user.displayName} you are logged in successfully`);
      }
    });
  };

  // sign up with email and password
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
          <p className="text-center mb-3">Or Sign In with</p>
          <div className="flex justify-center items-center gap-4 mb-5">
            <FcGoogle
              onClick={googleSignIn}
              className="text-3xl cursor-pointer"
            ></FcGoogle>
            <FaGithub
              onClick={githubSignIn}
              className="text-3xl cursor-pointer"
            ></FaGithub>
            <TiSocialFacebook
              onClick={facebookSignIn}
              className="text-3xl text-blue-700 cursor-pointer"
            ></TiSocialFacebook>
            <FaXTwitter
              onClick={twitterSignIn}
              className="text-3xl  cursor-pointer"
            ></FaXTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
