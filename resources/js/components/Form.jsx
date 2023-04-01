const Form = () => {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Welcome back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details.</p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-8">
          <button className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] bg-gradient-to-tr from-pink-300 w-full to-violet-400 text-white text-lg font-bold p-3 rounded-2xl">Sign In</button>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button className="font-medium text-violet-500 text-base pl-1">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
