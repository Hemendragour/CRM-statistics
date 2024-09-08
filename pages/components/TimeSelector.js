// // components/TimeSelector.js
// import React from 'react';

// const TimeSelector = ({ selectedTime, setSelectedTime }) => {
//   const times = ['1 Day', '1 Week', '1 Month'];

//   return (
//     <div className="flex space-x-4 justify-center mb-8">
//       {times.map(time => (
//         <button
//           key={time}
//           className={`px-4 py-2 rounded-lg ${
//             selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'
//           }`}
//           onClick={() => setSelectedTime(time)}
//         >
//           {time}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default TimeSelector;
import React from 'react';

const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const timeOptions = ['1 Week', '1 Month', '3 Months'];

  return (
    <div className="text-center mb-8">
      {timeOptions.map((time) => (
        <button
          key={time}
          onClick={() => setSelectedTime(time)}
          className={`px-4 py-2 m-2 ${
            selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          } rounded-full`}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;