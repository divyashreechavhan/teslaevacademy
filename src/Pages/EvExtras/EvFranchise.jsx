import React from 'react'
import './EVFranchise.css'

const EvFranchise = () => {
  return (
    <>
      <h1 style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingBottom: '50px', paddingTop: '35px' }}>EV Franchise</h1>

    <div>
    <img className='franchisePamphlet' src="Images\franchisePamphlet.png" alt="franchisePamphlet"  />
    </div>

    <h1 className="franchiseRegisterLink" style={{ textAlign: 'center' }}><a href="\ContactUs" target={"_blank"}><i className="fa-solid fa-pen-to-square" /> Register for Demo &amp; More Details</a></h1>

    </>
    
  )
}

export default EvFranchise