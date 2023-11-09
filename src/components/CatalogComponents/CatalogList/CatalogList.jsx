import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { ListStyled } from './CatalogList.styled';

import { fetchCars } from '../../../services/fetchAPI';
import CatalogListItem from '../CatalogListItem';

const CatalogList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  // const limitOnPage = 12;
  // const [currentIndex, setCurrentIndex] = useState(limitOnPage)

  useEffect(() => {
    setError(false);

    const fetchCatalogCars = async () => {
      try {
        const response = await fetchCars();

        if (response.length === 0) setError(true);
        setCars(response);

        // console.log('response: ', response);
      } catch (error) {
        setError(true);
        // console.error(error.message);
        toast.error(
          'Oops! Something went wrong. Please, reload the page and try again.'
        );
      }
    };
    fetchCatalogCars();
  }, []);

  return (
    <>
      {!error && cars && cars.length > 0 && (
        <ListStyled>
          {cars.map(car => (
            <CatalogListItem key={nanoid(5)} car={car} />
          ))}
        </ListStyled>
      )}
      {/* {error && (
        <ImageErrorView
          imageURL={imageError}
          alt={'Something went wrong'}
          width="600"
          message={'Please, reload the page and try again.'}
        />
      )} */}
    </>
  );
};

export default CatalogList;
