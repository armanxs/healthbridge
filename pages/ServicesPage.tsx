import React from 'react';
import { Link } from 'react-router-dom';
import { randomImage } from '../assets/images';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Banner */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${randomImage})` }}
        aria-label="A compassionate doctor listening to a patient's heartbeat."
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Consultation Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We are dedicated to providing you with convenient and comprehensive healthcare options.
          </p>
        </div>
      </section>

      {/* Original Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mt-8 grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">Clinic Consultations</h2>
            <p className="text-slate-600">
              Our in-office visits provide a traditional and thorough approach to healthcare. We offer a comfortable and professional environment for comprehensive diagnosis, treatment planning, and personalized care. Schedule a visit to meet with our dedicated medical team face-to-face.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">E-Consultation</h2>
            <p className="text-slate-600">
              Access quality healthcare from anywhere with our secure online appointments. E-consultations are perfect for follow-ups, managing chronic conditions, or addressing minor health concerns without the need to travel. Connect with our doctors through a secure video call at your convenience.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/e-consultation"
            className="inline-block bg-sky-500 text-white font-bold py-4 px-10 rounded-full hover:bg-sky-600 transition-colors duration-300 text-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;