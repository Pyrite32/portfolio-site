import "./ContactMe.css";
import Eagle from "../assets/eagle.png";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const emailValidRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactMe = () => {

    const [errorMessage, setErrorMessage] = useState('Please fill out the form before submitting.');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const styles = useSpring({
        backgroundColor: (errorMessage === '' ? '#DFA100' : "#3F3F3F")
    });
    
    useEffect(() => {
        if (name.trim() === '') {
            setErrorMessage("Please enter a name.");
        }
        else if (email.trim() === '') {
            setErrorMessage("Please enter an e-mail.");
        }
        else if (!emailValidRegex.test(email)) {
            setErrorMessage("That email address is not valid.");
        }
        else if (message.trim() === '') {
            setErrorMessage("What do you want to put in your message?");
        }
        else {
            setErrorMessage('');
        }

    }, [name, email, message]);


  return (
    <section className="contact-me-height bg-black px-20 flex flex-col">
      <header className="text-right relative z-20">
        <h1
          data-text="Contact Me"
          className="anaglyph text-6xl font-serif text-right pt-12 pb-4"
        >
          Contact Me
        </h1>
      </header>
      <div className="flex-grow flex justify-center gap-20 mb-10 h-max-form-height">
        <div className="pt-0 flex-grow">
            <div className="mx-auto text-center font-pixbold text-2xl text-off-white">
                <img src={Eagle} alt="" className="mx-auto mb-4"/>
                <h2 className="mb-2 pb-2">Patrick Keefe</h2>
                <p className="pb-1 text-xl font-pixel">Email: <a className="text-teal underline underline-offset-4" href="mailto:patrick@method93.com">patrick@method93.com</a></p>
                <p className="pb-1 text-xl font-pixel">Phone Number: <a className="text-teal underline underline-offset-4" href="tel:+14074031056">407-403-1056</a></p>
                <p className="pb-1 text-xl font-pixel">Github: <a className="text-teal underline underline-offset-4" href="https://github.com/Pyrite32" target="_blank" rel="noopener noreferrer">Pyrite32</a></p>
            </div>
        </div>
        <form action="/" className="w-8/12 contact-me-form">
          <div className="flex justify-stretch gap-8 h-1/4">
            <div className="form-grouping w-1/2 relative">
              <label htmlFor="name">name | company</label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Alberta Gator"
                className="IN w-full h-full"
                type="text"
                name="name"
              />
            </div>
            <div className="form-grouping w-1/2 relative">
              <label htmlFor="email">email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@provider.com"
                className="w-full h-full"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="form-grouping pt-8 h-3/4 relative">
            <label htmlFor="customMessage">message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello, I wanted to reach out about..."
              className="resize-none h-full w-full description"
              name="customMessage"
            />
          </div>
          <div className="w-full flex justify-end items-center gap-4 ml-auto text-right mt-8">
            <p className="w-1/2 inline-block font-pixel text-xl text-gray">{errorMessage}</p>
            <animated.button 
            type='submit' 
            className={`${errorMessage === '' ? 'pointer-events-none' : 'pointer-events-auto'} inline-block w-1/6 text-center px-12 py-4 font-pixbold`}
            style={styles}>
                Submit
            </animated.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
