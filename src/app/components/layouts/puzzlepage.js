'use client';
import React, { useState } from 'react';
import Navbar from './navbar';

export default function PuzzlePage({ challenge }) {
  const [answer, setanswer] = useState('');
  const [iscorrect, setiscorrect] = useState(null);

  const updatecompstatus = () => {
    const completeddays = JSON.parse(localStorage.getItem('completeddays')) || [];
    if (!completeddays.includes(challenge.day)) {
      completeddays.push(challenge.day);
      localStorage.setItem('completeddays', JSON.stringify(completeddays));
      window.dispatchEvent(new Event('storage')); // Notify other tabs/components
    }
  };

  const submitionhandler = () => {
    const correct = answer === challenge.expected;
    setiscorrect(correct);

    if (correct) {
      updatecompstatus();
    }
  };

  const handleinputter = (e) => {
    setanswer(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="w-full max-w-4xl border border-gray-700 rounded-lg bg-gray-800 p-8 shadow-md mt-6 mx-auto">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-mono font-bold">
            Day {challenge.day}: {challenge.title}
          </h1>
        </div>

        <p className="mb-6 text-lg font-mono whitespace-pre-wrap">{challenge.description}</p>
        
        <div className="mb-6 p-4 border border-gray-700 rounded bg-gray-700">
          <h2 className="mb-4 text-lg font-bold font-mono">Example</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-700 rounded bg-gray-900">
              <h3 className="text-sm font-bold mb-2">Input</h3>
              <pre className="text-sm whitespace-pre-wrap">{challenge.example.input}</pre>
            </div>
            <div className="p-4 border border-gray-700 rounded bg-gray-900">
              <h3 className="text-sm font-bold mb-2">Output</h3>
              <pre className="text-sm">{challenge.example.output}</pre>
            </div>
          </div>
        </div>

        <p className="mb-6 text-lg font-mono leading-relaxed">Alert: You are about to download a file that contains details needed to find this geocache. As the geocache owner, I ensure that this file is safe to download. It has not been checked by Geocaching HQ or by the reviewer for possible malicious content. Download this file at your own risk.</p>

        <div className="mb-6 p-4 border border-gray-700 rounded bg-gray-800">
          <p className="mb-2 font-mono text-sm">Download input data:</p>
          <a
            href={`/inputs/${challenge.day}-input.txt`}
            download
            className="font-mono text-blue-400 hover:text-blue-500 underline"
          >
            Input Data File
          </a>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:space-x-4">
          <input
            type="text"
            value={answer}
            onChange={handleinputter}
            placeholder="Enter your answer"
            className="flex-grow p-3 text-lg bg-gray-800 rounded font-mono text-white"
          />
          <button
            onClick={submitionhandler}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-lg rounded font-mono"
          >
            Submit
          </button>
        </div>

        {iscorrect !== null && (
          <div
            className={`p-4 rounded font-mono text-center ${
              iscorrect ? 'bg-green-800 text-green-300' : 'bg-red-800 text-red-300'
            }`}
          >
            {iscorrect ? 'Correct' : 'Incorrect'}
          </div>
        )}
      </div>
    </div>
  );
}