import React, { useState,useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import {useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
    
//   const [details,setDetails] = useState([]);
//   useEffect(()=>{
//       fetchData();
//   },[]);

//   const fetchData = async()=>{
//       try{
//       const response = await axios.get("http://127.0.0.1:2004/get");
//       setDetails(response.data);
//       console.log(response); 
//       }
//   catch(error){
//      console.log("error fetching data");
//   }
// };

//   const handleSubmit = (e) => {
//       console.log(email);
//       console.log(password);
//       if(email.trim()===''|| password.trim()==='') { 
//           alert('Please Enter Details');
//       }
//       if (details.some((user) => user.email === email && user.password === password)) {
//          navigate("/");
//       }
//       else{
//           alert('user not found');
//       }
//   }
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
      gmail: email,
      password: password,
    });

    let token = response.data.token;
    let user = response.data.userResponse;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  
    // if (response.some((user) => user.gmail === email && user.password === pass)) {
    //   navigate("/Home");
    // }
    navigate('/');
  } catch (error) {
    console.error('Error: ', error);
    alert("User not found. Please check your credentials.");
      }
    };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // setErrPassword("");
  };

  // const handleSignUp = () => {
  //   navigate("/");
  // };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full lgl:w-1/2 h-full">
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center" onSubmit={handleSubmit} >
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Sign in
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Email
                  </p>
                  <input 
                    onChange={handleEmail}
                    required value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="boo@workemail.com"
                  />
                  {/* {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )} */}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input 
                    
                    onChange={handlePassword}
                    required value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {/* {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )} */}
                </div>

               <button type="submit" 
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300">
                  Sign In
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="hover:text-blue-600 duration-300">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};

export default SignIn;