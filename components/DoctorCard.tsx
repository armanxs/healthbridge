
import React from 'react';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform transform hover:-translate-y-2">
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={`Dr. ${name} portrait`} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800">{`Dr. ${name}`}</h3>
        <p className="text-slate-500 mt-1 mb-4">{specialty}</p>
        <Link
          to="/e-consultation"
          className="inline-block bg-sky-100 text-sky-700 font-semibold py-2 px-6 rounded-full hover:bg-sky-200 transition-colors duration-300"
        >
          {`Schedule with Dr. ${name}`}
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;