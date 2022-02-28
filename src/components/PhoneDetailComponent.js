import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PhoneDetailComponent = () => {
  const phones = useSelector((state) => state.PhoneData.phones);
  const { id } = useParams();
  const phone = phones.find((phone) => phone.id == id);
  const {
    description, title, price, color, image,
  } = phone;
  return (
    <div className="detailsContainer">
      <div>
        <NavLink to="/phones" className="back">
          <p>Go Back</p>
        </NavLink>
      </div>
      <h2 className="title">{title}</h2>
      <div className="imgContainer">
        <img className="img" src={image} alt={title} />
      </div>
      <p className="description">{description}</p>
      <div className="flex">
        <p className="description">{color}</p>
        <p className="description">
          $
          {price}
        </p>
      </div>
    </div>
  );
};

export default PhoneDetailComponent;
