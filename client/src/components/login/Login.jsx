import React, { useState, Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login1 from "/src/assets/Login1.svg";
import Login4 from "/src/assets/Login4.svg";
import { FcGoogle } from "react-icons/fc";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Popup from "../shop/Popup";
import { AuthContext } from "../../contexts/AuthContext";

const data = {
  create: {
    image: Login1,
    title: "Create an account",
    subtitle: "Let's get started with your 30 day free trial.",
    btnText: "Create an account",
    google: "Sign up with Google",
    desc: "Already have an account ? ",
    main: "Log in",
  },
  login: {
    image2: Login4,
    title2: "Login",
    subtitle2: "Welcome back Please enter your details .",
    btnText2: "Login",
    forgot2: "Forgot password ?",
    google2: "Login with Google",
    desc2: "Don't have an account ? ",
    main2: "Sign up",
  },
};

const Login = () => {
  const { login, create } = data;
  const { image, title, subtitle, btnText, google, desc, main } = create;
  const {
    image2,
    title2,
    subtitle2,
    btnText2,
    forgot2,
    google2,
    desc2,
    main2,
  } = login;

  const [success, setSuccess] = useState(false);
  // Auth State

  // Router
  const navigate = useNavigate();

  // Context Api

  const { loginUser } = useContext(AuthContext);

  // Login Api
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLogin = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const loginSuccess = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData);

      if (!loginData.success) {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
      navigate("/dash");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccess = () => {
    setSuccess(!success);
  };
  const [modal, setModal] = useState(false);
  const hanldeModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {success ? (
        // Create
        <Fragment>
          <div className="primary flex flex-col p-5 md:h-[100vh] md:flex-row ">
            <div className="rounded-tl-lg rounded-tr-lg bg-white md:basis-1/2 md:rounded-l-xl md:rounded-tr-none lg:basis-2/5">
              <div className="px-10">
                <h1 className="mb-5 mt-10 text-center  text-2xl font-bold md:mb-6 md:mt-20 md:text-start md:text-2xl lg:text-[2.5rem]">
                  {title}
                </h1>
                <p className="text-center text-[12px] md:text-start md:text-base">
                  {subtitle}
                </p>
              </div>

              <form className="m-10 flex-row">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="username"
                  className="input"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="input"
                />
                <input
                  type="text"
                  required
                  name="password"
                  placeholder="Password"
                  className="input"
                />
              </form>

              <div className="">
                <button
                  type="submit"
                  className="mx-10 my-0 h-[55px] w-[32vh] rounded-xl bg-gray-700 text-base font-bold text-white transition-all ease-in hover:scale-105 md:my-2 md:w-[27.5vh] lg:w-[67.5vh]"
                  onClick={hanldeModal}
                >
                  {btnText}
                </button>
                {modal ? <Popup hanldeModal={hanldeModal} /> : null}

                <button
                  className="mx-10 my-6 flex h-[55px] w-[32vh] items-center justify-center rounded-xl border-2 border-black bg-white text-base 
                font-semibold text-black transition-all ease-in hover:scale-105 md:my-4  md:w-[27.5vh] lg:w-[67.5vh]"
                  onClick={hanldeModal}
                >
                  <FcGoogle className="mx-2 text-xl" /> {google}
                </button>
              </div>

              <div className="flex items-center justify-center">
                <p
                  onClick={handleSuccess}
                  className="mx-2 my-6 text-base text-gray-500 md:my-4 "
                >
                  {desc}
                </p>
                <p
                  onClick={handleSuccess}
                  className="font-semibold text-black hover:cursor-pointer hover:underline"
                >
                  {main}
                </p>
              </div>
            </div>

            <div className="md:basis-1/2 lg:basis-3/5">
              <button
                className="absolute bg-transparent md:top-[46%] md:my-[0.75rem] md:h-[55px]  md:w-[40px] lg:my-2"
                onClick={handleSuccess}
              >
                <BiChevronLeft className="hidden text-[60px] font-bold text-white transition-all ease-in-out hover:-translate-x-3 md:block " />
              </button>
              <img
                src={image}
                alt=""
                className="w-full rounded-bl-lg rounded-br-lg md:h-[96vh] md:rounded-r-xl md:rounded-bl-none lg:h-[94.72vh]  "
              />
              <button
                className="absolute right-5 top-[46%] mx-3 my-2 h-[55px] w-[40px] bg-transparent "
                onClick={handleSuccess}
              >
                <BiChevronRight className="text-[60px] font-bold text-white transition-all ease-in-out hover:translate-x-3" />
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {/* Login */}
          <div className="primary flex flex-col p-5 md:h-[100vh] md:flex-row ">
            <div className="rounded-tl-lg rounded-tr-lg bg-white md:basis-1/2 md:rounded-l-xl md:rounded-tr-none lg:basis-2/5">
              <div className="px-10">
                <h1 className="mb-5 mt-10 text-center  text-2xl font-bold md:mb-6 md:mt-20 md:text-start md:text-2xl lg:text-[2.5rem]">
                  {title2}
                </h1>
                <p className="text-center text-[12px] md:text-start md:text-base">
                  {subtitle2}
                </p>
              </div>

              <form className="m-10 flex-row" onSubmit={loginSuccess}>
                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  name="username"
                  value={username}
                  onChange={onChangeLogin}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="password"
                  value={password}
                  onChange={onChangeLogin}
                  
                />
                <Link to="/forgot">
                  <p className="mb-8 cursor-pointer text-end text-[12px] font-normal text-gray-400 hover:font-semibold hover:text-gray-800">
                    {forgot2}
                  </p>
                </Link>

                <button
                  className=" my-0 h-[55px] w-full rounded-xl bg-gray-700 text-base font-bold text-white transition-all ease-in hover:scale-105 md:my-2 md:w-[27.5vh] lg:w-[67.5vh]"
                  type="submit"
                >
                  {btnText2}
                </button>
                <button
                  className=" my-6 flex h-[55px] w-full items-center justify-center rounded-xl border-2 border-black bg-white text-base 
                font-semibold text-black transition-all ease-in hover:scale-105 md:my-4  md:w-[27.5vh] lg:w-[67.5vh]"
                >
                  <FcGoogle className="mx-2 text-xl" /> {google2}
                </button>
              </form>

              <div className="flex items-center justify-center">
                <p className="mx-2 my-6 text-base text-gray-500 md:my-4 ">
                  {desc2}
                </p>
                <p
                  onClick={handleSuccess}
                  className="font-semibold text-black hover:cursor-pointer hover:underline"
                >
                  {main2}
                </p>
              </div>
            </div>

            <div className="md:basis-1/2 lg:basis-3/5">
              <button
                className="absolute top-[46%] bg-transparent md:my-[0.75rem] md:h-[55px] md:w-[40px] lg:my-2"
                onClick={handleSuccess}
              >
                <BiChevronLeft className="text-[60px] font-bold text-white transition-all ease-in-out hover:-translate-x-3" />
              </button>
              <img
                src={image2}
                alt=""
                className="w-full rounded-bl-lg rounded-br-lg md:h-[96vh] md:rounded-r-xl md:rounded-bl-none lg:h-[94.72vh]  "
              />
              <button
                className="absolute right-5 top-[46%] mx-3 my-2 h-[55px] w-[40px] bg-transparent "
                onClick={handleSuccess}
              >
                <BiChevronRight className="text-[60px] font-bold text-white transition-all ease-in-out hover:translate-x-3" />
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Login;
