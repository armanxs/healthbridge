import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CaptchaPlaceholder from '../components/CaptchaPlaceholder';

interface IFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
  hipaaConsent: boolean;
}

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-sky-700 mb-4">Message Sent!</h1>
          <p className="text-lg text-slate-600">
            Thank you for contacting us. We will get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }
  
  const ErrorMessage: React.FC<{ message?: string }> = ({ message }) =>
    message ? <p role="alert" className="text-sm text-red-600 mt-1">{message}</p> : null;

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600">
              Have questions? Send us a message and we’ll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", { required: "Name is required." })}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" 
              />
              <ErrorMessage message={errors.name?.message} />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                type="email"
                id="email" 
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", { required: "Email is required.", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." } })}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" 
              />
               <ErrorMessage message={errors.email?.message} />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                aria-invalid={errors.subject ? "true" : "false"}
                {...register("subject", { required: "Subject is required." })}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" 
              />
               <ErrorMessage message={errors.subject?.message} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { required: "Message is required." })}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
               <ErrorMessage message={errors.message?.message} />
            </div>
            
            <div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="hipaaConsentContact"
                    aria-describedby="hipaa-description-contact"
                    type="checkbox"
                    {...register('hipaaConsent', { required: 'You must acknowledge the HIPAA notice to proceed.' })}
                    className="h-4 w-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="hipaaConsentContact" className="font-medium text-slate-700">
                    Privacy Acknowledgment
                  </label>
                  <p id="hipaa-description-contact" className="text-slate-500">
                    I acknowledge this form is handled in compliance with HIPAA privacy standards. Please do not include sensitive health information.
                  </p>
                </div>
              </div>
              <ErrorMessage message={errors.hipaaConsent?.message} />
            </div>

            <div className="mt-6">
              <CaptchaPlaceholder />
            </div>
            
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;