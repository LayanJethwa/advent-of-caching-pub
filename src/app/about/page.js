'use client';
import React from 'react';
import Navbar from '../components/layouts/navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 font-mono">
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex flex-col gap-4 lg:gap-6">

            <div className="hover:scale-105 transition-transform duration-500">
              <div className="w-full bg-gray-800 text-white rounded-lg">
                <div className="p-6"></div>
                <div className="px-6 pb-6">
                  <h2 className="text-3xl font-semibold mb-4">Welcome!</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Welcome to Advent of Caching, a Christmas-themed geocaching series designed for puzzle and coding enthusiasts! 
                    Inspired by the iconic <em>Advent of Code</em> by Eric Wastl, this site offers daily coding challenges with a festive twist. 
                    It’s the perfect way to sharpen your problem-solving skills while embracing the holiday spirit.
                  </p>
                </div>
              </div>
            </div>

            <div className="hover:scale-105 transition-transform duration-500">
              <div className="w-full bg-gray-800 text-white rounded-lg">
                <div className="p-6"></div>
                <div className="px-6 pb-6">
                  <h2 className="text-3xl font-semibold mb-4">Why Advent of Caching?</h2>
                  <p className="text-gray-400 leading-relaxed">
                    This project combines the thrill of coding with the joy of problem-solving, offering challenges that are 
                    both fun and thought-provoking. Whether you're an experienced programmer or just getting started, 
                    Advent of Caching encourages you to think outside the box and learn through engaging puzzles.
                  </p>
                </div>
              </div>
            </div>

            <div className="hover:scale-105 transition-transform duration-500">
              <div className="w-full bg-gray-800 text-white rounded-lg">
                <div className="p-6"></div>
                <div className="px-6 pb-6">
                  <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Starting December 1st, a new challenge will unlock each day, leading up to Christmas. These puzzles are designed 
                    to test your creativity, coding skills, and determination. Submit your solutions to find out if you're correct. 
                    The goal is to solve as many puzzles as you can—good luck!
                  </p>
                </div>
              </div>
            </div>

            <div className="hover:scale-105 transition-transform duration-500">
              <div className="w-full bg-gray-800 text-white rounded-lg">
                <div className="p-6"></div>
                <div className="px-6 pb-6">
                  <h2 className="text-3xl font-semibold mb-4">Got Questions?</h2>
                  <p className="text-gray-400 leading-relaxed">
                    If you have any questions, feedback, or just want to say hi, feel free to reach out at 
                    <a 
                      href="mailto:lrsjethwa3.14@gmail.com" 
                      className="text-blue-400 hover:text-blue-500 underline ml-1">
                      lrsjethwa3.14@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}