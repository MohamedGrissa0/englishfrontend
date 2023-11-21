import { useEffect, useState } from 'react';

function CustomHook(url) {
  const [data, setData] = useState([]);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const jsonData = await response.json();
      setData(jsonData.data);
      setIspending(false);
      setError(null);
    } catch (err) {
      setIspending(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    const abortcont = new AbortController();
    const fetchDataWithTimeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(fetchDataWithTimeout);
      abortcont.abort();
    };
  }, );

  const postData = async (newData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error('Error posting data.');
      }

      fetchData(); // Refresh data after posting
    } catch (err) {
      setError(err.message);
    }
  };

  const editData = async (itemId, updatedData) => {
    try {
      const response = await fetch(`${url}/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error updating data.');
      }

      fetchData(); // Refresh data after editing
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteData = async (itemId) => {
    try {
      const response = await fetch(`${url}/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting data.');
      }

      fetchData(); // Refresh data after deletion
    } catch (err) {
      setError(err.message);
    }
  };

  return { data, ispending, error, postData, editData, deleteData };
}

export default CustomHook;