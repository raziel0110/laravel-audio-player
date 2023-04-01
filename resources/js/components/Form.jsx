import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Form = ({register}) => {
  const navigate = useNavigate()
  const isRegisterPage = register || false
  const title = isRegisterPage ? "New Account" : "Welcome Back"
  const shortDescription = isRegisterPage ? "Need for good music? Please register..." : "Welcome Back! Please fill your details."

  const signUpLinkHandle = () => navigate("/register")
  const nameField = () => {
    if (isRegisterPage) {
      return (
        <div className='mt-1'>
          <label className="text-lg font-medium">Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            type="name"
            name="name"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
      );
    }
  }

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">{shortDescription}</p>
      <div className="mt-8">
        {nameField()}
        <div className='mt-1'>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className='mt-1'>
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
        {!isRegisterPage ? (<div className="mt-6 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button className="font-medium text-violet-500 text-base pl-1" onClick={signUpLinkHandle} >Sign Up</button>
        </div>) : null}
      </div>
    </div>
  );
}

Form.propTypes = {
  register: PropTypes.bool
}

export default Form;
