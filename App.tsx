import React from 'react';
import GeneratorForm from './components/GeneratorForm';
import { Camera, Terminal } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen rainbow-bg text-gray-800 font-sans selection:bg-pink-400 selection:text-white pb-10">
      {/* Glassmorphism Header */}
      <header className="bg-white/70 backdrop-blur-md border-b border-white/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-md md:max-w-2xl mx-auto px-4 py-4 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-2.5 rounded-xl text-white shadow-lg shadow-pink-300/50 transform hover:scale-105 transition-transform duration-300">
               <Terminal className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-tight drop-shadow-sm">
                ระบบสร้าง Prompt AI
              </h1>
              <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">AI Prompt File Generator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <GeneratorForm />
      </main>
    </div>
  );
};

export default App;