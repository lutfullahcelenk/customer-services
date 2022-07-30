/* eslint-disable no-lone-blocks */
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
//constants
import { users } from "../../constants/users";

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

const Auth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const [permitted, setPermitted] = useState(false);
  const { fullName, email, password } = formValue;

  //onchange function for form inputs
  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  //login function
  const handleLogin = () => {
    dispatch(
      login({
        fullName: fullName,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    navigate("/dashboard");
  };

  //control mechanism
  useEffect(() => {
    users.find(
      (user) =>
        user.fullName.toLocaleLowerCase() === fullName.toLocaleLowerCase() &&
        user.email === email
    )
      ? setPermitted(true)
      : setPermitted(false);
  }, [fullName, email]);

  return (
    <section className="flex h-screen gradient">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl m-auto text-white bg-slate-800 rounded-xl md:w-2/3 lg:w-3/5">
        <div className="flex flex-col items-center mb-10 ">
          <h2 className="pt-12 text-xl tracking-wide uppercase md:text-3xl">
            Login
          </h2>

          <p className="py-2 text-slate-400">
            "Please enter your Email && Password"
          </p>
        </div>

        <div className="w-full px-6 py-4">
          <input
            type="text"
            className="w-full p-3 text-black rounded shadow-md outline-none shadow-slate-500"
            value={fullName}
            onChange={handleChange}
            placeholder="Name && Surname"
            name="fullName"
          />
        </div>

        <div className="w-full px-6 py-4">
          <input
            type="email"
            className="w-full p-3 text-black rounded shadow-md outline-none shadow-slate-500"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="w-full px-6 py-4">
          <input
            type="password"
            className="w-full p-3 text-black rounded shadow-md outline-none shadow-slate-500"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />
        </div>

        <button
          type="button"
          className="px-10 py-2 my-6 uppercase border rounded-lg"
          onClick={() => {
            fullName && email && password && permitted && handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default Auth;
