import React from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";
import {
  FaEnvelope,
  FaHeadphones,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="max-padd-container mt-24">
      {/* contact form */}
      <div className="flex flex-col xl:flex-row gap-20 py-6 mb-10">
        {/* title */}
        <div>
          <Title
            title1={"GET"}
            title2={"IN TOuch"}
            titleStyle={"h3"}
            paraStyle={"hidden"}
          />
          <p className="mb-5 max-w-xl">
            Hae questions or need help send us a message, ad we,ll get back
            toyou soon as possible.
          </p>
          <form>
            <div className="flex gap-x-5">
              <div className="w-1/2 mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name "
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-deep rounded"
                />
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-deep rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here"
                className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-deep rounded"
              ></textarea>
            </div>
            <button type="submit" className="btn-secondary !rounded shadow-sm">
              Send Message
            </button>
          </form>
        </div>
        {/* cotat Details */}
        <div>
          <Title
            title1={"CONTACT"}
            title2={"DETAILS"}
            titleStyle={"h3"}
            paraStyle={"hidden"}
          />
          <p className="max-w-xl mb-4">
            we are always here to assist you! feel free to reach out to us
            through any of the following methods
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4">location:</h5>
              <p className="flexStart gap-x-2">
                <FaLocationDot />
                123 foodaessa street, food city, fc 12345
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4">email:</h5>
              <p className="flexStart gap-x-2">
                <FaEnvelope />
                info@foodsessa.com
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4">email:</h5>
              <p className="flexStart gap-x-2">
                <FaPhone />
                +1 (200) 123-4567
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4">support: </h5>
              <p className="flexStart gap-x-2">
                <FaHeadphones />
                24/7 Support is open
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
