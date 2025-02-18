import { useState } from "react";

const Home = () => {
    const [verticals, setverticals] = useState([
      {image:'', title: 'Supply Chain Sustainability', body:'Coming up with the framework for tracking carbon footprint. Track, manage, and reduce carbon footprint in logistics sector.', id: 1 },
      {image:'', title: 'Logistics Worker Wellness', body:'Focused toward driver wellness and safety. Developing the technology for tracking and measuring the driver behaviour and provide recommendation to improve wellness.', id: 2  },
      {image:'', title: 'Algorithms and ML', body:'Developing algorithms, software systems and machine learning techniques for efficient logistics operations.', id: 3  },
      {image:'', title: 'Logistics Infrastructure', body:'Technology development for the better logistics infrastructure. This would include integration of fuel efficient vehicle, drones in warehouse and last mile logistics etc.', id: 4  }
    ]);
    const handleClick = () => {
        console.log('hello, ninjas');
    }
    return ( 
        <div className="home">
            {verticals.map((vertical) => (
              <div className="verticals-preview" key={vertical.id}>
                <h2>{ vertical.title }</h2>
                </div>  
            ))}
        </div>
     );
}
 
export default Home;



// import React from 'react';
// import { Github, Twitter, Linkedin } from 'lucide-react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <span className="text-xl font-bold">Logo</span>
//             </div>
            
//             {/* Navigation Links - Always Visible */}
//             <div className="flex items-center space-x-1">
//               <a 
//                 href="#" 
//                 className="px-4 py-2 text-gray-600 relative group"
//               >
//                 <span className="relative z-10">Home</span>
//                 <div className="absolute inset-0 bg-blue-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
//               </a>
//               <a 
//                 href="#" 
//                 className="px-4 py-2 text-gray-600 relative group"
//               >
//                 <span className="relative z-10">Features</span>
//                 <div className="absolute inset-0 bg-green-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
//               </a>
//               <a 
//                 href="#" 
//                 className="px-4 py-2 text-gray-600 relative group"
//               >
//                 <span className="relative z-10">About</span>
//                 <div className="absolute inset-0 bg-purple-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
//               </a>
//               <a 
//                 href="#" 
//                 className="px-4 py-2 text-gray-600 relative group"
//               >
//                 <span className="relative z-10">Contact</span>
//                 <div className="absolute inset-0 bg-pink-100 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="bg-gray-50">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
//               Welcome to Our Platform
//             </h1>
//             <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//               Build something amazing with our cutting-edge tools and solutions.
//             </p>
//             <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
//               <div className="rounded-md shadow">
//                 <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
//                   Get started
//                 </a>
//               </div>
//               <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
//                 <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
//                   Learn more
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-3xl font-bold text-gray-900">Features</h2>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               Everything you need to build amazing projects
//             </p>
//           </div>

//           <div className="mt-10">
//             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                     {item}
//                   </div>
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Feature {item}</h3>
//                   <p className="mt-2 text-base text-gray-500">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="text-gray-400 hover:text-gray-300">
//               <Github />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-300">
//               <Twitter />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-gray-300">
//               <Linkedin />
//             </a>
//           </div>
//           <div className="mt-8 text-center text-gray-400">
//             <p>&copy; 2025 Your Company. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';

// const SustainabilityCard = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-stone-100 p-4">
//       <div className="max-w-lg w-full group">
//         <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl bg-white">
//           {/* Image Grid */}
//           <div className="grid grid-cols-3 grid-rows-2 gap-2 p-4">
//             <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
//               <img 
//                 src="/api/placeholder/400/300" 
//                 alt="Supply chain road" 
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//             <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
//               <img 
//                 src="/api/placeholder/400/600" 
//                 alt="Crystal ball showing sustainability" 
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//             <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
//               <img 
//                 src="/api/placeholder/400/300" 
//                 alt="Harbor view" 
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//             <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
//               <img 
//                 src="/api/placeholder/400/300" 
//                 alt="Cargo train" 
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//             <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
//               <img 
//                 src="/api/placeholder/400/300" 
//                 alt="Container yard" 
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6">
//             <h2 className="text-3xl font-bold mb-4 text-teal-600 transition-colors duration-300 group-hover:text-teal-700">
//               Supply Chain Sustainability
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
//               Coming up with the framework for tracking carbon footprint. Track, manage, and reduce carbon footprint in logistics sector.
//             </p>
//           </div>

//           {/* Hover Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SustainabilityCard;