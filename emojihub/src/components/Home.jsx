import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
        try {
          const response = await fetch('https://emojihub.yurace.pro/api/all');
          const result = await response.json();
          console.log(result); 
          setData(result.data); 
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
   
    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

return (
    <div>
      <h1>Home</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
  
      }
export default Home;
