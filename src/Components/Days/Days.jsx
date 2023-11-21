import React, { useState, useEffect } from 'react';
import CustomHook from '../../CustomHook';
import { Link } from 'react-router-dom';

export default function Days() {
  const { data, ispending, error, postData, editData, deleteData } = CustomHook(
    'http://localhost:5000/day'
  );

  const [newday, setNewDay] = useState(1);

  useEffect(() => {
    setNewDay(data.length + 1);
  }, [data]);

  const addNewDay = async () => {
    try {
      await postData({ Num: newday });
      setNewDay((prev) => prev + 1);
    } catch (error) {
      console.error('Error adding new day:', error);
    }
  };

  return (
    <div className='mx-2'>
      <div className='mb-4'>
        <button onClick={addNewDay} className='mt-2 p-3 bg-main rounded text-white'>
          Create a New Day
        </button>
      </div>

      {ispending ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <div className='grid  w-full  flex-col  items-center grid-cols-2 lg:grid-cols-4 gap-3'>
          {data.map((item, index) => (
            <Link key={index} to={`/day/${item.Num}`} className='no-underline'>
              <div className='max-w-sm rounded overflow-hidden bg-main text-white p-4 shadow-lg'>
                <p className='text-xl font-bold mb-2'>{`Day ${item.Num}`}</p>
                <p className='text-sm'>{`${item.Words.length} WORDS`}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
