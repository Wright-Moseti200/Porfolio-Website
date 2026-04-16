import React, { useState, useEffect } from 'react'
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "sonner"

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "47bd7ea9-4143-497b-86c1-a3b133f7f8fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast("Message has been sent successfully", {
        description: "Thank you for reaching out! I will get back to you as soon as possible.",
        action: {
          label: "Close",
          onClick: () => console.log("Closed"),
        },
      });
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      toast("Failed to send message", {
        description: data.message || "An error occurred while sending your message.",
      });
      setResult("");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className='mt-14 px-4 lg:px-0 contact' id='contact'>
        <h1 className='text-center font-semibold text-4xl lg:text-5xl' data-aos="fade-down">Get in touch</h1>
        <form onSubmit={onSubmit} data-aos="fade-up" data-aos-duration="1000">
          <div className='flex flex-col w-full justify-center items-center mt-10'>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 w-full lg:w-auto'>
              <input placeholder='Enter your name' name="name" className='border p-3 w-full lg:w-96 rounded-sm outline-none border-black' required />
              <input placeholder='Enter your email' name="email" type="email" className='border p-3 w-full lg:w-96 rounded-sm outline-none border-black' required />
            </div>
            <textarea className='mt-5 lg:mt-10 border p-5 rounded-sm w-full lg:w-[800px] h-60 lg:h-80 outline-none border-black resize-none' placeholder='Enter your message' name='message' required>
            </textarea>
            <button type='submit' className='mt-10 border p-4 pr-7 pl-7 rounded-full border-black w-full lg:w-auto bg-white hover:bg-black hover:text-white transition-colors duration-300'>
              {result === "Sending...." ? "Sending...." : "Submit now"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact