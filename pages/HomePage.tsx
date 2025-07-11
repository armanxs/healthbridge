import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sliderImage1, sliderImage2, sliderImage3 } from '../assets/images';

const slideData = [
  { src: sliderImage1, alt: 'A doctor discussing results on a clipboard with a male patient.' },
  { src: sliderImage2, alt: 'A friendly doctor applying a bandage to a young girl\'s arm.' },
  { src: sliderImage3, alt: 'A female doctor having a pleasant consultation with a male patient.' },
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section Slider */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden text-white text-center">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${slide.src})`,
              opacity: index === currentIndex ? 1 : 0,
            }}
            role="img"
            aria-label={slide.alt}
            aria-hidden={index !== currentIndex}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" aria-live="polite">
            Welcome to HealthBridge
          </h1>
          <h2 className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Compassionate in-office and virtual consultations tailored to you.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-transform transform hover:scale-105 duration-300"
          >
            Book Now
          </Link>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`block w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            ></button>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 pb-16">
        {/* Services Overview */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            We offer personalized clinic consultations focused on your health needs. Whether in person or via secure E-Consultation, our experienced team is here for you.
          </p>
        </section>

        {/* E-Consultation & About Us Teasers */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Try Our E-Consultation</h3>
            <p className="text-slate-600 mb-6">
              Connect with our doctors from the comfort of home. Schedule an online consultation in minutes.
            </p>
            <Link
              to="/e-consultation"
              className="inline-block bg-sky-500 text-white font-bold py-3 px-6 rounded-full hover:bg-sky-600 transition-colors duration-300"
            >
              Schedule E-Consult
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">About Our Practice</h3>
            <p className="text-slate-600 mb-6">
              Since 2010, HealthBridge has delivered accessible, patient-centered care with empathy and expertise.
            </p>
            <Link
              to="/about"
              className="inline-block text-sky-600 font-semibold hover:text-sky-800 transition-colors duration-300"
            >
              Learn More &rarr;
            </Link>
          </div>
        </section>

        {/* Meet the Doctors Preview */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h3>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-6">
            Our doctors combine skill and compassion to provide top-notch care.
          </p>
          <Link
            to="/doctors"
            className="inline-block bg-slate-800 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-900 transition-colors duration-300"
          >
            View All Doctors
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;