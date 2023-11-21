import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <div className='flex text-white p-4 items-center justify-between bg-main'>
    <div className='flex flex-1 items-center  '>
    <Link className='mx-3' to="/">Home</Link>
    <Link className='mx-3' to="/add">Add</Link>

    </div>
    <div className='flex-1 text-center text-md md:text-xl text-white' style={{ fontFamily: 'Marhey, sans-serif'}}>
      بسم الله الرحمن الرحيم * توكلت على الله
    </div>
   </div>
  );
}
