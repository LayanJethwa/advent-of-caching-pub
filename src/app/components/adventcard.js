'use client';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function AdventCard({ day, link, completed }) {
  return (
    <div className="w-44 h-40 sm:w-56 sm:h-48 flex flex-col items-center justify-center relative py-4 sm:py-6 bg-slate-800 rounded-lg shadow-md">
      <div className="absolute top-2 right-2 rounded-full shadow-lg">
        {completed ? (
          <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
        ) : (
          <FaTimesCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
        )}
      </div>

      <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
        {`Day ${day}`}
      </div>

      <a
        href={link}
        className="absolute inset-0 flex items-center justify-center text-white text-opacity-0 hover:text-opacity-100"
      >
      </a>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-lg ${
          completed ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
    </div>
  );
}