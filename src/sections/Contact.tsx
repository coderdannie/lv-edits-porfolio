import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { socialIcons } from "../components/common/constants";

interface FormErrors {
  email?: {
    code: string;
    message: string;
  }[];
  message?: {
    code: string;
    message: string;
  }[];
  name?: {
    code: string;
    message: string;
  }[];
}

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mqayqyye");

  // Type assertion for errors
  const errors = state.errors as FormErrors;

  return (
    <section
      id="contact"
      title="Contact"
      className="align-element py-[40px] md:py-[100px]"
    >
      <div className="flex justify-center items-center gap-2 mx-auto rounded-tl-2xl rounded-br-2xl bg-white/5 hover:bg-white/10 w-fit border border-white/10 transition-all text-sm text-white whitespace-nowrap px-6 py-3">
        <div className="relative rounded-full border grid place-items-center border-[#0B7410] w-5 aspect-square">
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#0B7410] animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full border border-[#0B7410] animate-pulse"></div>

          {/* Center dot */}
          <div className="bg-[#0B7410] w-3 aspect-square rounded-full relative z-10 animate-pulse"></div>
        </div>
        <h2 className="font-secondary text-2xl">Available to work</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 lg:mt-16">
        <div className="lg:w-1/2 space-y-6">
          <h3 className="font-sub-heading text-2xl md:text-3xl lg:text-4xl text-white">
            Get in Touch
          </h3>
          <p className="text-[#9E9E9E] text-base md:text-xl leading-relaxed">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
          <div className="flex gap-4 items-center pt-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#BABABA] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          {state.succeeded ? (
            <div className="bg-green-500/10 border border-green-500 text-green-500 px-6 py-8 rounded-2xl text-center space-y-3 animate-fadeIn">
              <div className="text-5xl mb-2">✓</div>
              <h4 className="text-xl font-semibold">
                Message Sent Successfully!
              </h4>
              <p className="text-green-400">
                I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="transform transition-all duration-300 focus-within:scale-[1.01]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-black border border-[#515151] rounded-xl px-5 py-4 text-white placeholder-[#5A5A5A] focus:outline-none focus:border-[#757575] transition-all duration-300 focus:shadow-lg focus:shadow-white/5"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1 block"
                />
              </div>

              <div className="transform transition-all duration-300 focus-within:scale-[1.01]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-black border border-[#515151] rounded-xl px-5 py-4 text-white placeholder-[#5A5A5A] focus:outline-none focus:border-[#757575] transition-all duration-300 focus:shadow-lg focus:shadow-white/5"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1 block"
                />
              </div>

              <div className="transform transition-all duration-300 focus-within:scale-[1.01]">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full bg-black border border-[#515151] rounded-xl px-5 py-4 text-white placeholder-[#5A5A5A] focus:outline-none focus:border-[#757575] transition-all duration-300 resize-none focus:shadow-lg focus:shadow-white/5"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1 block"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-white text-black font-medium py-4 rounded-full hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
                style={{
                  boxShadow:
                    "inset 0 -8px 9px 0 rgba(0, 0, 0, 0.25), 0.3em 0.3em 1em rgba(0, 0, 0, 0.5)",
                }}
              >
                <span className="relative z-10">
                  {state.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              {errors &&
                Object.keys(errors).length > 0 &&
                !errors.email &&
                !errors.message &&
                !errors.name && (
                  <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-center animate-fadeIn">
                    Something went wrong. Please try again.
                  </div>
                )}
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
