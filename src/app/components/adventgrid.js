'use client';
import { useState, useEffect } from 'react';
import AdventCard from './adventcard';

export default function AdventGrid() {
  const [completeddays, setcompleteddays] = useState([]);

  useEffect(() => {
    const storedStatus = JSON.parse(localStorage.getItem('completeddays')) || [];
    setcompleteddays(storedStatus);

    const handleStorageChange = () => {
      const updatedStatus = JSON.parse(localStorage.getItem('completeddays')) || [];
      setcompleteddays(updatedStatus);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center">

      <main className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white font-mono">
          Choose Your Day
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6">
          {Array.from({ length: 25 }, (_, index) => {
            const day = index + 1;
            const link = `/2024/day${day}`;
            const completed = completeddays.includes(day);
            return (
              <AdventCard
                key={day}
                day={day}
                link={link}
                completed={completed}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}