import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'service_w5dc8u8', // Replace with your Service ID
        'template_1ia9jri', // Replace with your Template ID
        formRef.current,
        'C2wHbL7TYcbG4bw2P' // Replace with your Public Key
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError(true);
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out if you're looking for a product enthusiast, have a question, or just want to connect.</p>
          <div className="contact-details">
            <div className="contact-item">
              <span>📧 Email:</span>
              <a href="mailto:pmanchalsrin@umass.edu">pmanchalsrin@umass.edu</a>
            </div>
            <div className="contact-item">
              <span>📍 Location:</span>
              <p>Amherst, Massachusetts</p>
            </div>
            <div className="contact-item">
              <span>💼 LinkedIn:</span>
              <a href="https://www.linkedin.com/in/praneeth-manchal/" target="_blank" rel="noopener noreferrer">Praneeth Manchal</a>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <span className="loading-text">
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          {success && (
            <p className="success-message">
              <span className="success-icon">✓</span> Message sent successfully!
            </p>
          )}
          {error && (
            <p className="error-message">
              <span className="error-icon">!</span> Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}; 