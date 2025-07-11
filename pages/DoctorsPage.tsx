
import React from 'react';
import DoctorCard from '../components/DoctorCard';

const doctors = [
  { name: 'Emily Carter', specialty: 'General Practitioner', imageUrl: 'https://picsum.photos/400/400?image=669' },
  { name: 'Benjamin Hayes', specialty: 'Pediatrics', imageUrl: 'https://picsum.photos/400/400?image=670' },
  { name: 'Olivia Chen', specialty: 'Dermatology', imageUrl: 'https://picsum.photos/400/400?image=671' },
  { name: 'Marcus Rodriguez', specialty: 'Internal Medicine', imageUrl: 'https://picsum.photos/400/400?image=672' },
  { name: 'Sophia Loren', specialty: 'Family Medicine', imageUrl: 'https://picsum.photos/400/400?image=673' },
  { name: 'Liam Johnson', specialty: 'General Practitioner', imageUrl: 'https://picsum.photos/400/400?image=674' },
];


const DoctorsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Doctors</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet our team of experienced and compassionate medical professionals dedicated to your health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialty={doctor.specialty}
              imageUrl={doctor.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
