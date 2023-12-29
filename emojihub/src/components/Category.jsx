
import React from 'react';
import { useSelector } from 'react-redux';

const Category = () => {
  const selectedCategory = useSelector((state) => state.details.data);

  return (
    <div>
      <h1>Category Details</h1>
      {selectedCategory ? (
        <>
          <h2>{selectedCategory.name}</h2>
          <p>Value: {selectedCategory.value}</p>
          
        </>
      ) : (
        <p>No category selected</p>
      )}
    </div>
  );
};

export default Category;
