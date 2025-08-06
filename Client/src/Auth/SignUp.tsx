
import useNavigation from "./utils";

export const SignUp = () => {
  const {loginNavigate}=useNavigation();
  return (
 <div className="flex flex-col w-screen min-h-screen justify-center items-center bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] px-6 py-10">
  <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
    <h2 className="text-[#667eea] text-4xl font-extrabold text-center mb-8">
      SignUp
    </h2>

    <form className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-gray-700 mb-2 font-medium text-sm">Email</label>
        <input
          type="email"
          className="px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#667eea]"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 mb-2 font-medium text-sm">Password</label>
        <input
          type="password"
          className="px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#667eea]"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-full font-bold text-md transition-all duration-300 ease-in-out hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
      >
        SignUp
      </button>
    </form>

    <p className="text-gray-600 text-sm text-center mt-8">
      Already have an account?{" "}
      <span className="text-[#667eea] font-semibold underline cursor-pointer hover:text-[#764ba2]"
      onClick={loginNavigate}>
        Login
      </span>
    </p>
  </div>
</div>

  )
}
