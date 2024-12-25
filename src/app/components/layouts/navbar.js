'use client';

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <div className="max-w-7xl mx-auto flex justify-end space-x-8">
        <a href="/" className="text-white font-mono text-lg font-semibold hover:text-gray-300 transition">
          Home
        </a>
        <a href="/about" className="text-white font-mono text-lg font-semibold hover:text-gray-300 transition">
          About
        </a>
        <a href="https://www.geocaching.com/geocache/GCB0PJY" className="text-white font-mono text-lg font-semibold hover:text-gray-300 transition">
          Geocaching
        </a>
      </div>
    </nav>
  );
}