import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiTypescript, SiSwift, SiXcode, SiSass } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

export default function TechStack() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Technologies I Work With</h2>
      
      {/* Flexbox layout with better alignment */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* React.js */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <FaReact className="text-4xl text-blue-500" />
          <span className="mt-2 text-sm text-gray-400">React.js</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiNextdotjs className="text-4xl text-gray-100" />
          <span className="mt-2 text-sm text-gray-400">Next.js</span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <FaNodeJs className="text-4xl text-green-500" />
          <span className="mt-2 text-sm text-gray-400">Node.js</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiTailwindcss className="text-4xl text-blue-400" />
          <span className="mt-2 text-sm text-gray-400">Tailwind CSS</span>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiBootstrap className="text-4xl text-purple-600" />
          <span className="mt-2 text-sm text-gray-400">Bootstrap</span>
        </div>

        {/* HTML5 */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <FaHtml5 className="text-4xl text-orange-600" />
          <span className="mt-2 text-sm text-gray-400">HTML5</span>
        </div>

        {/* SCSS */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiSass className="text-4xl text-pink-600" />
          <span className="mt-2 text-sm text-gray-400">SCSS</span>
        </div>

        {/* CSS3 */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <FaCss3Alt className="text-4xl text-blue-500" />
          <span className="mt-2 text-sm text-gray-400">CSS3</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <FaJsSquare className="text-4xl text-yellow-500" />
          <span className="mt-2 text-sm text-gray-400">JavaScript</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiTypescript className="text-4xl text-blue-500" />
          <span className="mt-2 text-sm text-gray-400">TypeScript</span>
        </div>

        {/* PHP */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <FaPhp className="text-4xl text-indigo-600" />
          <span className="mt-2 text-sm text-gray-400">PHP</span>
        </div>

        {/* MySQL */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <DiMysql className="text-4xl text-blue-600" />
          <span className="mt-2 text-sm text-gray-400">MySQL</span>
        </div>

        {/* Xcode */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiXcode className="text-4xl text-blue-400" />
          <span className="mt-2 text-sm text-gray-400">Xcode</span>
        </div>

        {/* SwiftUI */}
        <div className="flex flex-col items-center justify-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-lg">
          <SiSwift className="text-4xl text-orange-500" />
          <span className="mt-2 text-sm text-gray-400">SwiftUI</span>
        </div>
      </div>
    </div>
  );
}
