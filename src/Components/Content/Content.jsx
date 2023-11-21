  import React, { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';

  export default function Content() {
  
    const { id } = useParams();
    const [dayDetails, setDayDetails] = useState(null);

    useEffect(() => {
      const fetchDayDetails = async () => {
        try {
          const response = await fetch(`http://localhost:5000/day/${id}`);
          if (response.ok) {
            const data = await response.json();
            setDayDetails(data.day);
            console.log(data);
          } else {
            console.error('Error fetching day details:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching day details:', error);
        }
      };

      fetchDayDetails();
    },);



    return (
      <div className="text-center p-4">
      {dayDetails && dayDetails.Words ? (
        <div className='grid gap-2 md:grid-cols-6 grid-cols-3'>
          {dayDetails.Words.map((word, index) => (
            <div key={index} className='shadow bg-main rounded text-center grid grid-cols-1 w-full border-white border-b-3 overflow-hidden whitespace-normal h-30'>
              <p className='shadow rounded-md text-white p-4 text-center'>
                {word.nom}
              </p>
              <hr />
              <p className='shadow rounded-md text-white p-4 text-center' style={{ fontFamily: 'Almarai, sans-serif' }}>
                {word.pnom}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No words to display.</p>
      )}
    </div>
    
    );
  }
