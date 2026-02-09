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
    <section ref={ref} id="contact" className="py-24 md:py-48 text-center relative pb-28 md:pb-48">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* TOAST */}
      {showToast && (
        <div className="
          fixed top-6 right-6 z-50
          bg-dark-card border border-accent/40 
          px-6 py-4 rounded-xl shadow-lg text-accent font-mono text-sm
          animate-slide-in
          flex items-center gap-3
        ">
          <span className="text-lg">{toastMessage.includes('✓') ? '🎉' : '⚠️'}</span>
          {toastMessage}
        </div>
      )}

      <div className={`relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <p className="text-accent font-mono mb-4 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-accent/40"></span>
          04. What's Next?
          <span className="w-8 h-px bg-accent/40"></span>
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <p className="max-w-xl mx-auto mb-12 text-dark-text-secondary leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi,
          feel free to reach out — I'll get back to you!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative">
          {/* Decorative Elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 rounded-xl blur-lg transition-opacity duration-500 group-hover:opacity-30"></div>
          
          <div className="relative bg-dark-card/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-accent/10">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent rounded-t-2xl"></div>
            
            {/* NAME */}
            <div className="mb-6">
              <label className="block font-mono text-sm text-accent mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/80 border border-accent/20 
                           text-dark-text placeholder:text-dark-text-secondary/50
                           focus:border-accent focus:outline-none input-focus transition-all duration-300"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block font-mono text-sm text-accent mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/80 border border-accent/20 
                           text-dark-text placeholder:text-dark-text-secondary/50
                           focus:border-accent focus:outline-none input-focus transition-all duration-300"
              />
            </div>

            {/* MESSAGE */}
            <div className="mb-8">
              <label className="block font-mono text-sm text-accent mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/80 border border-accent/20 
                           text-dark-text placeholder:text-dark-text-secondary/50
                           focus:border-accent focus:outline-none input-focus transition-all duration-300 resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading || success}
              className={`group w-full font-mono text-lg border-2 border-accent text-accent px-8 py-4 rounded-xl
                          flex items-center justify-center gap-3 transition-all duration-300
                          ${loading || success ? "cursor-not-allowed opacity-70" : "hover:bg-accent hover:text-dark-bg hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1"}`}
            >
              {/* Spinner */}
              {loading && (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}

              {/* Success Checkmark */}
              {success && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}

              {!loading && !success && (
                <>
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
              
              {loading && <span>Sending...</span>}
              {success && <span>Sent!</span>}
            </button>
          </div>
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
