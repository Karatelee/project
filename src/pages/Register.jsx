import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Register.css"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://127.0.0.1:8000/auth/users/", data)
      .then((res) => {
        navigate("/"); // Navigate to the desired page after registration, e.g., profile page
        console.log(res);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <input
            className="login-input"
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            value={"H77h6n{u1efN"}
          />
          <button className="login-button" type="submit">
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;