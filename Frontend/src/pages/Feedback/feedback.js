import React, { useState } from 'react';
import './feedback.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { addFeedback } from './api';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import { useEffect } from 'react';

const FeedForm = () => {

    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    useEffect(() => {
      setPrevLocation(location.state.data);
    }, [location]);
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }

  return (
    <div className="down">
      <div className="login-form">
      <Breadcrumbs title="Feedback" prevLocation={prevLocation} />
      <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill your feedback
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Name
              </p>
              <input
                onChange={handleChange}
                id='name'
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
              />
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Email
              </p>
              <input
                onChange={handleChange}
                id='email'
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your email here"
              />
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Feedback
              </p>
              <textarea
                onChange={handleChange}
                id='message'
                 cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Enter your message here"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;