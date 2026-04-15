import React, { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "47bd7ea9-4143-497b-86c1-a3b133f7f8fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form has been sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
          AOS.init({
              duration: 2000, // Animation duration in milliseconds
              once: true, // Whether animation should happen only once
          });
      }, []);
  return (
    <>
      <div className='mt-14 px-4 lg:px-0 contact' id='contact'
      data-aos="fade-down"
    data-aos-once="false" 
    data-aos-mirror="true"
    data-aos-duration="1200"
      >
        <h1 className='text-center font-semibold text-4xl lg:text-5xl'>Get in touch</h1>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col w-full justify-center items-center mt-10'>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 w-full lg:w-auto'>
              <input placeholder='Enter your name' name="name" className='border p-3 w-full lg:w-96 rounded-sm outline-none border-black' />
              <input placeholder='Enter your email' name="email" className='border p-3 w-full lg:w-96 rounded-sm outline-none border-black' />
            </div>
            <textarea className='mt-5 lg:mt-10 border p-5 rounded-sm w-full lg:w-[800px] h-60 lg:h-80 outline-none border-black resize-none' placeholder='Enter your message' name='message'>
            </textarea>
            <button type='submit' className='mt-10 border p-4 pr-7 pl-7 rounded-full border-black w-full lg:w-auto bg-white'>Submit now</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact