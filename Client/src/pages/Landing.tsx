// import { NavLink } from "react-router-dom";

import useNavigation from "../Auth/utils";

const Landing = () => {
const {loginNavigate,SignUpNavigate}=useNavigation();
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-3 text-white ">
        <div className="text-[#667eea] font-semibold text-2xl md:text-3xl flex ">
          Connect
        </div>

        <div className="flex gap-4 text-sm md:text-xl font-semibold text-black">
          <button
            type="button"
            className="inline-block bg-gradient-to-br from-[#667eea] to-[#764ba2]  text-white px-6 py-3 no-underline rounded-full font-bold text-sm border border-white/30 transition-all duration-300 ease-in-out animate-fadeInUp
        
       hover:bg-white/30 hover:-translate-y-[3px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          onClick={loginNavigate}>
            
            Login
          </button>

          <button
            type="button"
            className="inline-block bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-6 py-3 no-underline rounded-full font-bold text-sm border border-white/30 transition-all duration-300 ease-in-out animate-fadeInUp
  hover:bg-white/30 hover:-translate-y-[3px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          onClick={SignUpNavigate}>
            Get Started
          </button>
        </div>
      </nav>

      <div className="flex flex-col w-screen min-h-screen md:overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] -center px-6 py-4 ">
        <div className="flex flex-col-reverse md:flex-row justify-between  items-center  ">
          <section className="text-white w-full text-center md:text-left ">
            <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
              {" "}
              Share your Thoughts,Ideas In
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200 mt-2 md:mt-4">
              Connect
            </h1>
            <p className="text-sm md:text-2xl font-medium py-6 max-w-xl mx-auto md:mx-0 ">
              A platform where ideas flow freely and creativity knows no bounds
            </p>
          </section>

          <img
            src="/person1.png"
            alt="person"
            className="w-3/4 md:w-1/3 max-w-sm hidden md:block "
          />
        </div>
        <div className="px-6 text-center mb-5 ">
          <button
            type="button"
            className="inline-block bg-white/20 text-white px-6 py-3 no-underline rounded-full font-bold text-[1.1rem] border border-white/30 transition-all duration-300 ease-in-out animate-fadeInUp
        
       hover:bg-white/30 hover:-translate-y-[3px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
