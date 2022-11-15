import React from 'react'
import "./EvCoeMou.css"

const EvCoeMou = () => {
  return (
    <>
      <h1 style={{ color: '#4dbf1c', fontWeight: 700, fontSize: '50px', textAlign: 'center', paddingBottom: '50px', paddingTop: '35px' }}>EV  Center of Excellence Portal</h1>
      <div className='evcoeimg' style={{ textAlign: "center" }}>
        <img style={{ width: "85%", padding: "35px" }} src="Images\evcoe.jpg" alt="evcoeimg" />
      </div>



      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJk5wQogjoMUmvrN9i_ore3l8yA_otuQ_ryxWh-NPlW7m1aA/viewform" target={"_blank"} style={{ textDecoration: "none" }} ><button type="submit" style={{ marginTop: "20px", marginBottom: "50px", textAlign: "center" }} className="btn lastbtn">Fill in more details for Setting up Electric Vehicle COE in your College or Industry</button></a>

      <h1 className="CoeMouRegisterLink" style={{ textAlign: 'center' }}><a href="\ContactUs" target={"_blank"}><i className="fa-solid fa-pen-to-square" /> Register for Demo &amp; More Details</a></h1>

    </>
  )
}

export default EvCoeMou