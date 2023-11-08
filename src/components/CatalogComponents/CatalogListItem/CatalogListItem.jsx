import React from 'react';

import { ImageStyled, ItemStyled } from './CatalogListItem.styled';

const CatalogListItem = ({ car }) => {
  const {
    // id,
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
  } = car;

  return (
    <ItemStyled>
      <ImageStyled
        src={img}
        alt={`${make} ${model}, ${year}`}
        loading="lazy"
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
    </ItemStyled>
  );
};

export default CatalogListItem;
