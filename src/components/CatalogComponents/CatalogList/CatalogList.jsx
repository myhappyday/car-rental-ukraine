import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { fetchCars } from '../../../services/fetchAPI';

const CatalogList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(false);

    const fetchCatalogCars = async () => {
      try {
        const response = await fetchCars();
        console.log('response: ', response);

        if (response.length === 0) setError(true);
        setCars(response);
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
        <ul>
          {cars.map(
            ({
              id,
              year,
              make,
              model,
              type,
              img,
              functionalities,
              rentalPrice,
              rentalCompany,
              address,
              mileage,
            }) => (
              <li
                key={nanoid(5)}
                id={id}
                // make={make}
                // model={model}
              >
                <img
                  src={img}
                  alt={`${make} ${model}, ${year}`}
                  width="274"
                  // height="268"
                />
                <p>
                  {make} {model}, {year}
                </p>
                <p>{rentalPrice}</p>
                <p>{address}</p>
                <p>{rentalCompany}</p>
                <p>{type}</p>
                <p>{model}</p>
                <p>{mileage}</p>
                <p>{functionalities[0]}</p>
              </li>
            )
          )}
        </ul>
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
