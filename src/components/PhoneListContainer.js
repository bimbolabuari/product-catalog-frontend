import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import displayPhones from '../redux/actions/actionCreator';

const PhoneListContainer = () => {
  const phones = useSelector((state) => state.PhoneData.phones);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPhones = async () => {
    setIsLoading(true);
    const response = await axios(
      'https://product-catalog.herokuapp.com/phones',
    );
    dispatch(displayPhones(response.data));
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPhones();
  }, []);

  const phoneRender = () => (
    <div className="phoneListContainer">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        phones.map((phone) => {
          const {
            id, image, price, color, title,
          } = phone;
          return (
            <div className="container" key={id}>
              <Link to={`/phone/${id}`}>
                <div className="section">
                  <div className="imgContainer">
                    <img className="img" src={image} alt={title} />
                  </div>
                  <h2 className="title">{title}</h2>
                  <div className="flex">
                    <p className="description">{color}</p>
                    <p className="description">
                      $
                      {price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );

  return <>{phoneRender()}</>;
};

export default PhoneListContainer;
