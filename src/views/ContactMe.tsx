import "./ContactMe.css";
import Pfp from "../assets/image-pfp.png";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useForm } from "@formspree/react";

const emailValidRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactMe = () => {
  const [errorMessage, setErrorMessage] = useState(
    "Please fill out the form before submitting."
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formState, handleFormSubmit] = useForm("xkgnwaqd");

  const styles = useSpring({
    backgroundColor: errorMessage === "" ? "#DFA100" : "#3F3F3F",
  });

  useEffect(() => {
    if (name.trim() === "") {
      setErrorMessage("Please enter a name.");
    } else if (email.trim() === "") {
      setErrorMessage("Please enter an e-mail.");
    } else if (!emailValidRegex.test(email)) {
      setErrorMessage("That email address is not valid.");
    } else if (message.trim() === "") {
      setErrorMessage("What do you want to put in your message?");
    } else {
      setErrorMessage("");
    }
  }, [name, email, message]);

  return (
    <section
      className="contact-me-height bg-black mobile:px-5 md:px-20 flex flex-col"
      data-scroll-section
    >
      <header className="text-right relative z-20">
        <h1
          data-text="Contact Me"
          className="anaglyph text-6xl font-serif mobile:text-center lg:text-right pt-12 pb-4"
        >
          Contact Me
        </h1>
      </header>
      <div className="flex-grow flex lg:flex-row mobile:flex-col  justify-center gap-8 md:gap-12 xl:gap-20 mb-10 h-max-form-height">
        <div className="pt-0 flex-grow">
          <div className="mx-auto text-center font-pixbold text-2xl text-off-white">
            <img src={Pfp} width="256px" alt="" className="mx-auto mb-4" />
            <h2 className="mb-2 pb-2">Patrick Keefe</h2>
            <p className="pb-1 text-xl font-pixel">
              Email:{" "}
              <a
                className="text-teal underline underline-offset-4"
                href="mailto:patrick@method93.com"
              >
                patrick@method93.com
              </a>
            </p>
            <p className="pb-1 text-xl font-pixel">
              Phone Number:{" "}
              <a
                className="text-teal underline underline-offset-4"
                href="tel:+14074031056"
              >
                407-403-1056
              </a>
            </p>
            <p className="pb-1 text-xl font-pixel">
              Github:{" "}
              <a
                className="text-teal underline underline-offset-4"
                href="https://github.com/Pyrite32"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pyrite32
              </a>
            </p>
          </div>
        </div>
        {!formState.succeeded ? 
          (
          <form onSubmit={handleFormSubmit} className="mobile:w-full lg:w-8/12 contact-me-form">
            <div className="flex mobile:flex-col md:flex-row justify-stretch gap-2 md:gap-4 xl:gap-8 mobile:h-32 md:h-16 lg:h-1/4">
              <div className="form-grouping mobile:flex-grow mobile:w-full md:w-1/2 relative">
                <label htmlFor="name">name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alberta Gator"
                  className="w-full h-full"
                  type="text"
                  name="name"
                />
              </div>
              <div className="form-grouping mobile:flex-grow mobile:w-full md:w-1/2 relative">
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
            <div className="form-grouping pt-2 lg:pt-4 xl:pt-8 mobile:h-64 sm:h-40 lg:h-3/4 relative">
              <label htmlFor="customMessage">message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nice to meet you, I'm..."
                className="resize-none h-full w-full description"
                name="customMessage"
              />
            </div>
            <div className="flex mobile:flex-col-reverse sm:flex-row justify-end items-center gap-4 text-right mt-8">
              <p className="inline-block font-pixel text-xl text-gray">
                {errorMessage}
              </p>
              <animated.button
                type="submit"
                className={`${
                  errorMessage === ""
                    ? ""
                    : "pointer-events-none"
                } inline-block text-center px-12 py-4 font-pixbold`}
                style={styles}
              >
                Submit
              </animated.button>
            </div>
          </form>
          )
          : (
            <div className="mobile:flex-grow mobile:w-full md:w-1/2 relative">
              <p className="w-max mx-auto pt-32 font-pixbold">
                Thanks for submitting!
              </p>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default ContactMe;
