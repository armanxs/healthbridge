import React from 'react';
import { randomImage } from '../assets/images';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Banner */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${randomImage})` }}
        aria-label="A compassionate doctor attending to a patient."
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About HealthBridge</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your partners in health, connecting compassionate care with modern convenience.
            </p>
        </div>
      </section>

      {/* Original Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Founded in 2010, HealthBridge was built on a simple yet powerful mission: to make quality healthcare both accessible and convenient for our community. We recognized the need for a practice that not only embraces the latest in medical advancements but also preserves the human touch in patient care.
              </p>
              <p>
                Our journey began with a small team of dedicated professionals who believed in blending modern medicine with genuine empathy. We strive to create a welcoming atmosphere where patients feel heard, understood, and empowered. From day one, our goal has been to put patients first, ensuring that every interaction is guided by respect and a deep commitment to your well-being.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Our Values</h2>
              <p>
                These principles are the bedrock of our practice and guide every decision we make.
              </p>
              <ul className="space-y-4">
                <li><strong>Compassion:</strong> We treat every patient with kindness, empathy, and respect.</li>
                <li><strong>Accessibility:</strong> We are committed to removing barriers to care through flexible scheduling and our E-Consultation platform.</li>
                <li><strong>Excellence:</strong> We pursue the highest standards of medical care through continuous learning and dedication.</li>
                <li><strong>Integrity:</strong> We build trust by being transparent, honest, and ethical in all our interactions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
