import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import CaptchaPlaceholder from '../components/CaptchaPlaceholder';

interface IFormInputs {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: Date | null;
  preferredTime: Date | null;
  symptoms: string;
  additionalInfo?: string;
  hipaaConsent: boolean;
}

const EConsultationPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      preferredDate: null,
      preferredTime: null,
      symptoms: '',
      hipaaConsent: false,
    }
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-sky-700 mb-4">Thank You!</h1>
          <p className="text-lg text-slate-600">
            Your e-consultation request has been submitted. We will contact you within 24 hours to confirm your appointment.
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Schedule Your E-Consultation</h1>
            <p className="text-lg text-slate-600">
              Fill out the form below and we’ll confirm your online appointment within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                aria-invalid={errors.fullName ? "true" : "false"}
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" 
              />
              <ErrorMessage message={errors.fullName?.message} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }})}
                  className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" 
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register('phone', { required: 'Phone number is required' })}
                  className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" 
                />
                <ErrorMessage message={errors.phone?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                <Controller
                  control={control}
                  name="preferredDate"
                  rules={{ required: "Preferred date is required" }}
                  render={({ field }) => (
                    <DatePicker
                      id="preferredDate"
                      placeholderText="Select a date"
                      onChange={(date: Date | null) => field.onChange(date)}
                      selected={field.value}
                      minDate={new Date()}
                      className="w-full" // custom styles in index.html take care of appearance
                      aria-invalid={errors.preferredDate ? "true" : "false"}
                    />
                  )}
                />
                <ErrorMessage message={errors.preferredDate?.message} />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-1">Preferred Time</label>
                 <Controller
                    control={control}
                    name="preferredTime"
                    rules={{ required: "Preferred time is required" }}
                    render={({ field }) => (
                      <DatePicker
                        id="preferredTime"
                        selected={field.value}
                        onChange={(date: Date | null) => field.onChange(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="Select a time"
                        className="w-full"
                        aria-invalid={errors.preferredTime ? "true" : "false"}
                      />
                    )}
                  />
                  <ErrorMessage message={errors.preferredTime?.message} />
              </div>
            </div>

            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-slate-700 mb-1">Brief Symptoms / Reason for Visit</label>
              <textarea 
                id="symptoms" 
                rows={4} 
                aria-invalid={errors.symptoms ? "true" : "false"}
                {...register('symptoms', { required: 'This field is required' })}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
              <ErrorMessage message={errors.symptoms?.message} />
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 mb-1">Additional Information (Optional)</label>
              <textarea 
                id="additionalInfo" 
                rows={2} 
                {...register('additionalInfo')}
                className="w-full px-3 py-2 bg-white text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
            </div>

            <div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="hipaaConsent"
                    aria-describedby="hipaa-description"
                    type="checkbox"
                    {...register('hipaaConsent', { required: 'You must acknowledge the HIPAA notice to proceed.' })}
                    className="h-4 w-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="hipaaConsent" className="font-medium text-slate-700">
                    HIPAA Acknowledgment
                  </label>
                  <p id="hipaa-description" className="text-slate-500">
                    I acknowledge this form is handled in compliance with HIPAA privacy standards.
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
                Request E-Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EConsultationPage;