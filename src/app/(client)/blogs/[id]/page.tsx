import React from 'react'
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
    <div>
        
    </div>
  )
}

export default SingleBlogPage