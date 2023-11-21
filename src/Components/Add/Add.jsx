import React, { useState } from 'react';

export default function Add() {
  const [nom, setNom] = useState('');
  const [Num, setNum] = useState('');
  const [pnom, setPnom] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/Word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, Num, pnom }),
      });

      if (response.ok) {
        console.log('Word added successfully');
        // Redirect or perform any other action after adding the word
      } else {
        console.error('Error adding word:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding word:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <label className="block mb-4">
          Nom:
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="border p-2 w-full mt-2"
            placeholder="Enter the name"
          />
        </label>
        <label className="block mb-4">
          Num:
          <input
            type="number"
            value={Num}
            onChange={(e) => setNum(e.target.value)}
            className="border p-2 w-full mt-2"
            placeholder="Enter the number"
          />
        </label>
        <label className="block mb-4">
          Pnom:
          <input
            type="text"
            value={pnom}
            onChange={(e) => setPnom(e.target.value)}
            className="border p-2 w-full mt-2"
            placeholder="Enter the Pnom"
          />
        </label>
        <button type="submit" className="bg-main text-white p-2 rounded w-full mt-4">
          Add Word
        </button>
      </form>
    </div>
  );
}
