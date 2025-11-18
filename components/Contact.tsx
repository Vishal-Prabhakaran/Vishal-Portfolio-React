import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setToastMessage("✓ Message sent successfully!");
        setShowToast(true);

        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setShowToast(false), 3000);
        setTimeout(() => setSuccess(false), 2000);
      })
      .catch(() => {
        setLoading(false);

        setToastMessage("⚠ Failed to send message. Try again.");
        setShowToast(true);

        setTimeout(() => setShowToast(false), 3000);
      });
  };

  return (
    <section ref={ref} id="contact" className="py-24 md:py-48 text-center relative">

      {/* TOAST */}
      {showToast && (
        <div className="
          fixed top-6 right-6
          bg-dark-card border border-accent/40 
          px-4 py-3 rounded-lg shadow-lg text-accent font-mono text-sm
          animate-slide-in
        ">
          {toastMessage}
        </div>
      )}

      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <p className="text-accent font-mono mb-2">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">Get In Touch</h2>

        <p className="max-w-xl mx-auto mb-12 text-dark-text-secondary">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi,
          feel free to reach out — I'll get back to you!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-dark-card p-8 rounded-xl shadow-lg border border-accent/20 text-left">
          
          {/* NAME */}
          <div className="mb-6">
            <label className="block font-mono text-sm text-dark-text-secondary mb-2">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-accent/30 
                         text-dark-text focus:border-accent focus:outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block font-mono text-sm text-dark-text-secondary mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-accent/30 
                         text-dark-text focus:border-accent focus:outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-8">
            <label className="block font-mono text-sm text-dark-text-secondary mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-accent/30 
                         text-dark-text focus:border-accent focus:outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading || success}
            className={`w-full font-mono text-lg border border-accent text-accent px-8 py-3 rounded-lg
                        flex items-center justify-center transition-all duration-300
                        ${loading || success ? "cursor-not-allowed opacity-70" : "hover:bg-accent/10"}`}
          >
            {/* Spinner */}
            {loading && (
              <svg className="animate-spin h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}

            {/* Success Checkmark */}
            {success && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent animate-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}

            {!loading && !success && "Send Message"}
          </button>
        </form>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.4s ease forwards; }

        @keyframes checkmark {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-check { animation: checkmark 0.4s ease forwards; }
      `}</style>
    </section>
  );
};

export default Contact;
