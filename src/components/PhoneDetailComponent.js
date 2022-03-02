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
      <div className="navlink">
        <NavLink to="/phones" className="back">
          <p className="nav">Return to Home page</p>
        </NavLink>
      </div>
      <h2 className="title">{title}</h2>
      <div className="detailsFlex">
        <div className="imgContainer imgFlex">
          <img className="img" src={image} alt={title} />
        </div>
        <div className="rightFlex">
          <p className="description descriptionFlex">{description}</p>
          <div className="flex">
            <p className="description descriptionFlex">{color}</p>
            <p className="description descriptionFlex">
              $
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailComponent;
