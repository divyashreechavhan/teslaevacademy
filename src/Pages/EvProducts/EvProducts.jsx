import React from 'react'
import "./EvProducts.css"
import { Link } from 'react-router-dom'

const EvProducts = () => {
  return (
    <>
      <div>
        <h1 style={{ color: '#4dbf1c', fontWeight: 700, fontSize: '50px', textAlign: 'center', paddingBottom: '50px', paddingTop: '35px' }}>EV Products</h1>
        <div className="ProductCard">
          <div className="ProductMeta">
            <div className="ProductPhoto">
              <img src="images\digitalGarage2.jpg" alt="digitalGarage2" />
            </div>
          </div>
          <div className="ProductDescription">
            <h2>Web and App Product</h2>
            <h1>Digital Garage</h1>
            <p>Automotive</p>
            <p style={{ fontSize: '20px' }}>1 Month/3 Months/6 Months/ 12 Months</p>
            <p className="read-more" style={{ color: '#5ad67d' }}>
              Ready For Sale
            </p>
          </div>
        </div>
        <div className="ProductCard alt" >
          <div className="ProductMeta">
            <div className="ProductPhoto" style={{ height: '229px', width: '280px' }}>
              <img src="images\deliveryEV.jpg" alt="deliveryEV" />
            </div>
          </div>
          <div className="ProductDescription">
            <h2>Fleet/Delivery Business</h2>
            <h1>Delivery on Electric Vehicles</h1>
            <p>Serivice</p>
            <p style={{ fontSize: '20px' }}>1 Month/3 Months/6 Months/ 12 Months</p>
            <p className="read-more" style={{ color: '#5ad67d' }}>
              Ready For Sale
            </p>
          </div>
        </div>
        <div className="ProductCard">
          <div className="ProductMeta">
            <div className="ProductPhoto">
              <img src="images\retrofitmentKit1.jpg" alt="retrofitmentKit1" />
            </div>
          </div>
          <div className="ProductDescription">
            <h2>EV Kits</h2>
            <h1>Retrofitment Kits - 2W/3W</h1>
            <p>Product Development</p>
            <p style={{ fontSize: '20px' }}>Minimum MOQ - 5 Sets</p>
            <p className="read-more" style={{ color: '#5ad67d' }}>
              Ready For Sale
            </p>
          </div>
        </div>
        <div className="ProductCard alt">
          <div className="ProductMeta">
            <div className="ProductPhoto">
              <img src="images\chargingStations.jpg" alt="chargingStations" />
            </div>
          </div>
          <div className="ProductDescription">
            <h2>Charging Stations</h2>
            <h1>EV Charging with App</h1>
            <p>Product Development</p>
            <p style={{ fontSize: '20px' }}>1 Month/3 Months/6 Months/ 12 Months</p>
            <p className="read-more" style={{ color: '#5ad67d' }}>
              Ready For Sale
            </p>
          </div>
        </div>
        <div className="ProductCard">
          <div className="ProductMeta">
            <div className="ProductPhoto">
              <img src="images\onlineSchool1.jpg" alt="onlineSchool1" />
            </div>
          </div>
          <div className="ProductDescription">
            <h2>Online School</h2>
            <h1>KG-12 Digital School</h1>
            <p>Digital Product</p>
            <p style={{ fontSize: '20px' }}>1 Month/3 Months/6 Months/ 12 Months</p>
            <p className="read-more" style={{ color: '#5ad67d' }}>
              Ready For Sale
            </p>
          </div>
        </div>
        <div className="ProductCard alt">
          <div className="ProductMeta">
            <div className="ProductPhoto" style={{ height: '229px', width: '280px' }}>
              <img src="images\onlineSchoolAdv.jpg" alt="onlineSchoolAdv" />
            </div>
          </div>
          <div className="ProductDescription">
            <h2>Online Professional Courses</h2>
            <h1>All Advance Technology</h1>
            <p>Online/Hands on</p>
            <p style={{ fontSize: '20px' }}>1 Month/3 Months/6 Months/ 12 Months</p>
            <p className="read-more" style={{ color: '#5ad67d' }}>
              Ready For Sale
            </p>
          </div>
        </div>
        <h1 className="ProductRegisterLink" style={{ textAlign: 'center' }}><a href="\ContactUs"  target={"_blank"}><i className="fa-solid fa-pen-to-square" /> Register for Demo &amp; More Details</a></h1>
      </div>
  
    </>
  )
}

export default EvProducts