import PropTypes from 'prop-types'
import Form from "../components/Form";

const Register = ({register}) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form register={register}/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0" />
      </div>
    </div>
  );
}

Register.propTypes = {
  register:  PropTypes.bool
}

export default Register;
