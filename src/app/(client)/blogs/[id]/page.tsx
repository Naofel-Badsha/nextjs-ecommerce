import React from 'react'
import { FaArrowsSpin } from 'react-icons/fa6';
interface PlatformCard {
  id: string;
  title: string;
  description: string;
  color: string;
  pinColor: string;
}

const platforms: PlatformCard[] = [
  { id: '01', title: 'Freepik', description: 'Freepik offers free and premium vectors, photos, PSDs, and mockups for graphic designers.', color: 'bg-blue-50 border-blue-200', pinColor: 'text-blue-600' },
  { id: '02', title: 'Pinterest', description: 'Pinterest is a visual platform for discovering, saving, and sharing creative ideas.', color: 'bg-red-50 border-red-200', pinColor: 'text-red-600' },
  { id: '03', title: 'Envato', description: 'Envato is a marketplace for premium design assets like templates, graphics, videos, and more.', color: 'bg-green-50 border-green-200', pinColor: 'text-green-600' },
  { id: '04', title: 'Dribbble', description: 'Dribbble is a platform for showcasing, discovering, and connecting with creative design work.', color: 'bg-pink-50 border-pink-200', pinColor: 'text-pink-600' },
  { id: '05', title: 'Flaticon', description: 'Freepik offers free and premium vectors, photos, PSDs, and mockups for graphic designers.', color: 'bg-teal-50 border-teal-200', pinColor: 'text-teal-600' },
  { id: '06', title: 'Mockup World', description: 'Mockup World offers free, high-quality PSD mockups for showcasing designs in realistic settings.', color: 'bg-cyan-50 border-cyan-200', pinColor: 'text-cyan-600' },
];

const SingleBlogPage = () => {
  return (
<div className="min-h-screen bg-gray-50 p-10 flex justify-center items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full relative z-10">
        {platforms.map((item) => (
          <div 
            key={item.id} 
            className={`relative p-6 rounded-2xl border-2 ${item.color} shadow-lg transition-transform hover:scale-105 duration-300`}
          >
            {/* Top Pin Decoration */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
               <div className={`p-1 bg-white rounded-full shadow-md ${item.pinColor}`}>
                  <FaArrowsSpin size={24} fill="currentColor" />
               </div>
            </div>

            {/* Content */}
            <div className="mt-4">
              <span className={`text-2xl font-bold opacity-70 ${item.pinColor}`}>{item.id}</span>
              <h3 className="text-xl font-extrabold text-gray-800 mt-1 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
            
            {/* Logo Placeholder (Right Top) */}
            <div className="absolute top-4 right-4 opacity-20">
               <div className="w-10 h-10 bg-gray-400 rounded-md" /> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleBlogPage