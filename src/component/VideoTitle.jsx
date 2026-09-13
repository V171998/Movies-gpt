
import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen md:w-screen aspect-video pt-[13%] px-20 absolute text-white bg-linear-to-r from-black">
      <h1 className="text-base mt-4  pl-0 md:text-4xl font-bold">{title}</h1>

      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

      <div className=" pl-0 flex items-center gap-3 mt-5 md:mt-0">
        <button className="flex items-center gap-1.5 md:gap-2 bg-white text-black py-1.5 px-4 md:py-3 md:px-12 text-base md:text-xl rounded-lg hover:bg-opacity-80 transition">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        <button className="hidden md:flex items-center gap-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-75 transition">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

// const VideoTitle = ({title , overview}) => {
//   return (
//     <div className="w-screen aspect-video pt-[20%] px-20  absolute text-white bg-linear-to-r from-black">
//       <h1 className="text-4xl font-bold">{title}</h1>
//       <p className="py-6 text-lg w-1/4">{overview}</p>
//       <div>
//         <button className="bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg">
//           play
//         </button>
//         <button className=" mx-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg">
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// }

