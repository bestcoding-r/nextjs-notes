'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { contactAction } from './server.action';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Here you would typically send the form data to your backend
      // For this example, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 space-y-8 bg-background rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-foreground/80">
            We would love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6" action={contactAction}> 
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground/80">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-background border border-foreground/30 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground/80">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-background border border-foreground/30 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 bg-background border border-foreground/30 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 bg-background border border-foreground/30 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-background bg-foreground hover:bg-foreground/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-all duration-300 ease-in-out"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {submitMessage && (
            <p className="text-center text-foreground/80">{submitMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
