export default function custom404() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl sm:text-8xl font-mono font-bold text-red-500">
          404
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-mono font-bold mt-6">
          Naughty naughty, you're too early! 
        </h2>
        
        <p className="mt-4 text-lg sm:text-xl font-mono text-gray-400 text-center max-w-md">
          Come back another day...
        </p>
    
        <div className="mt-8 flex space-x-4">
          <a
            href="/"
            className="px-6 py-3 bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg font-mono text-lg transition-transform duration-200 hover:scale-105"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }