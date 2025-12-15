import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

interface FormErrors {
  email?: { code: string; message: string }[];
  message?: { code: string; message: string }[];
  name?: { code: string; message: string }[];
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("xqaropwk");
  const errors = state.errors as FormErrors;

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">
            Send a Message
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#FF6B5A] transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {state.succeeded ? (
            <div className="bg-green-500/10 border border-green-500 p-8 text-center space-y-4 rounded-lg">
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
              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-[#FF6B5A] hover:bg-[#ff5544] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME"
                  required
                  className="w-full bg-black/30 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 uppercase text-sm tracking-wider"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1 block uppercase tracking-wide"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="w-full bg-black/30 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 uppercase text-sm tracking-wider"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1 block uppercase tracking-wide"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="YOUR MESSAGE"
                  rows={5}
                  required
                  className="w-full bg-black/30 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 resize-none uppercase text-sm tracking-wider"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1 block uppercase tracking-wide"
                />
              </div>

              {/* Generic Error */}
              {errors &&
                Object.keys(errors).length > 0 &&
                !errors.email &&
                !errors.message &&
                !errors.name && (
                  <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded text-center text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
