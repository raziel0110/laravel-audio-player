import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiService from '../services/ApiService'

const Form = ({register}) => {
  const navigate = useNavigate()
  const isRegisterPage = register || false
  const title = isRegisterPage ? "New Account" : "Welcome Back"
  const shortDescription = isRegisterPage ? "Need for good music? Please register..." : "Welcome Back! Please fill your details."

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const userObj = register ? {name: null, email: null, password: null} : {email: null, password: null};
  const [user, setUser] = useState(userObj)

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit = () => {
    setLoading(true);

    try {
      const response = ApiService.post('/register', user);
      if (response && response.data) {

      }
    } catch (err) {

    } finally {
      setLoading(false);
    }
  }

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="mt-8">
          <button
            className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] bg-gradient-to-tr from-pink-300 w-full to-violet-400 text-white text-lg font-bold p-3 rounded-2xl"
            onClick={onSubmit}
          >
            Sign In
          </button>
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
