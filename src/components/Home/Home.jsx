import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';


export default function Home() {
  async function getProducts() {
    return await axios.get('http://sabil.somee.com/api/Product/GetAllProducts');
  }

  let { isLoading, isFetching, data, error } = useQuery('getAllProducts', getProducts);



  return (
    <>
      <div className="products">
        <h2>
          ALL PRODUCTS
          <div className="line"></div>
        </h2>

        <div className="container py-4">
          <div className="row">
            {data?.data?.map((item) => (
              <div key={item.id} className="col-md-4 col-lg-3 col-sm-6 mb-4">
                <div className="card">
                  <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="text d-flex flex-column justify-content-end align-items-center">
                      {item.description && (
                        <p className="description">{item.description}</p>
                      )}
                      <p className="card-text">EGP {item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
