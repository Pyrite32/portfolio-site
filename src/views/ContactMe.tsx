import "./ContactMe.css";
import Eagle from "../assets/eagle.png";

const ContactMe = () => {
  return (
    <section className="contact-me-height bg-black px-20 flex flex-col">
      <header className="text-right relative z-20">
        <h1
          data-text="Contact Me"
          className="anaglyph text-6xl font-serif text-right pt-6 pb-4"
        >
          Contact Me
        </h1>
      </header>
      <div className="flex-grow flex justify-center gap-20 mb-10">
        <div className="pt-0 flex-grow">
            <div className="mx-auto text-center font-pixbold text-2xl text-off-white">
                <img src={Eagle} alt="" className="mx-auto mb-4"/>
                <h2> Patrick Keefe</h2>
                <p className="text-xl font-pixel">Phone Number: <a className="text-teal underline underline-offset-4" href="tel:+14074031056">patrick@method93.com</a></p>
                <p className="text-xl font-pixel">Phone Number: <a className="text-teal underline underline-offset-4" href="tel:+14074031056">407-403-1056</a></p>
            </div>
        </div>
        <form action="/" className="w-8/12 contact-me-form">
          <div className="flex justify-stretch gap-8 h-1/4">
            <div className="form-grouping w-1/2 relative">
              <label htmlFor="name">name | company</label>
              <input
                placeholder="Alberta Gator"
                className="IN w-full h-full"
                type="text"
                name="name"
              />
            </div>
            <div className="form-grouping w-1/2 relative">
              <label htmlFor="email">email</label>
              <input
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
              placeholder="Hello, I wanted to reach out about..."
              className="resize-none h-full w-full description"
              name="customMessage"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
