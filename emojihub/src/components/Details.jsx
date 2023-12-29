
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsData } from '../features/details/detailsSlice';

const Details = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.details.data);

  useEffect(() => {
    dispatch(fetchDetailsData(category));
  }, [dispatch, category]);

  return (
    <div>
      <h1>Details Page</h1>
      <p>Description: {detailsData.description}</p>
    </div>
  );
};

export default Details