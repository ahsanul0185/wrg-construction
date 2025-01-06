import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    console.log(formData);
  };

  return (
    <div className="py-20 px-5 sm:px-10 max-w-[1220px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
      {/* Map */}
      <div className="md:flex-1 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159916774!2d-122.52000096533688!3d37.75767131506752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1736077307396!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg w-full"
          title="Google Map"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="md:flex-1">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Contact
        </h2>
        <form onSubmit={handleSubmit} className="w-full  mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              className="outline-none bg-[#f2f2f2] rounded-md p-3 w-full"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="outline-none bg-[#f2f2f2] rounded-md p-3 w-full"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <textarea
            className="outline-none bg-[#f2f2f2] rounded-md p-3 w-full mt-3 h-44 resize-none"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 px-2 text-white font-bold rounded-md bg-dark mt-3 hover:bg-dark/85 duration-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
