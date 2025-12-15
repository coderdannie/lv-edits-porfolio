import React, { useState } from "react";
import { Mail, Instagram, Facebook } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
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
  const [state, handleSubmit] = useForm("xqaropwk");
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation(0.1);

  const errors = state.errors as FormErrors;

  return (
    <section
      id="contact"
      className="min-h-screen bg-black py-20 px-6 md:px-12"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#FF6B5A] text-xs md:text-sm font-bold tracking-[0.3em] mb-6 uppercase">
            Let's Work Together
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content - Info */}
          <div className="space-y-8">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-white/10">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Available for Work
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-tight">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-400 text-sm">
                    Fill out the form and I'll get back to you as soon as
                    possible
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-tight">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-900 border border-white/10 hover:border-[#FF6B5A] flex items-center justify-center text-white hover:text-[#FF6B5A] transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-zinc-900 border border-white/10 p-6 mt-8">
              <h4 className="text-white font-bold text-lg mb-3 uppercase tracking-tight">
                Response Time
              </h4>
              <p className="text-gray-400 text-sm">
                I typically respond within 24-48 hours during business days
              </p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div>
            {state.succeeded ? (
              <div className="bg-green-500/10 border border-green-500 p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase">
                  Message Sent!
                </h3>
                <p className="text-green-400">
                  I'll get back to you as soon as possible.
                </p>
                {/* <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2 bg-[#FF6B5A] hover:bg-[#ff5544] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Send Another
                </button> */}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 uppercase text-sm tracking-wider"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 block"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 uppercase text-sm tracking-wider"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 block"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full bg-zinc-900 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 resize-none uppercase text-sm tracking-wider"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 block"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-10 py-5 bg-[#FF6B5A] hover:bg-[#ff5544] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      SENDING...
                    </span>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
                {errors &&
                  Object.keys(errors).length > 0 &&
                  !errors.email &&
                  !errors.message &&
                  !errors.name && (
                    <div
                      className={`bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-center scroll-animate animate-fade-up ${
                        sectionVisible ? "animated delay-1000" : ""
                      }`}
                    >
                      Something went wrong. Please try again.
                    </div>
                  )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
