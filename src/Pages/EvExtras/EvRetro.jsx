import React from 'react'
import './EvRetro.css'
const EvRetro = () => {


  return (
    <>
      <h1 style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingBottom: '50px', paddingTop: '35px' }}>Electric Vehicle Retrofitment Portal</h1>
      <div className="row acCards" style={{ marginLeft: "95px" }}>
        <div className="column acCardsCol">
          <img src="Images\AC1.jpg" alt="AC1.jpg" style={{ width: "70%", borderRadius: "10px", boxShadow: "0 2px 3px #4dbf1c", border: "1px solid #4dbf1c" }} />
        </div>
        <div className="column acCardsCol">
          <img src="Images\AC2.jpg" alt="AC1.jpg" style={{ width: "70%", borderRadius: "10px", boxShadow: "0 2px 3px #4dbf1c", border: "1px solid #4dbf1c" }} />
        </div>
        <div className="column acCardsCol">
          <img src="Images\AC3.jpg" alt="AC1.jpg" style={{ width: "70%", borderRadius: "10px", boxShadow: "0 2px 3px #4dbf1c", border: "1px solid #4dbf1c" }} />
        </div>
      </div>
      <hr />
      <hr />
      <section className="paymentSection" style={{ textalign: "center" }}>
        <div className="main paymentMain">
          <div className="image">
            <img className="card-img" style={{ borderRadius: "120px", height: "250px", width: '250px' }} src="Images\payment.png" alt="paymentImage" />
            {/* icons */}
          </div>
          <div className="descriptionPayment">
            <h4>ARAI Approved EV Retrofitment Kit: 175000 Rs.</h4>
            <p>(Offer only valid for Group of 10 Members)</p>
            <h5>After Advance Payment of Rs. 10000, Specification Sheet, ARAI Approval Document will be shown.</h5>
            <p>(For Payment, click below)</p>
      <a href="https://pages.razorpay.com/pl_EYmt0QIUIcRSon/view" target={"_blank"} style={{ textDecoration: "none" }} ><button type="submit" style={{ marginTop: "20px", marginBottom: "50px", textAlign: "center" }} className="btn btn-payment"> Click here for  Advance Payment</button></a>
          
          </div>
        </div>
      </section>
      <hr />
      <hr />
      <h3 className="RetroBrochureLink" style={{ textAlign: 'center' }}><a href="PDFs\EVTW_Registration Kit.pdf" target={"_blank"}><i className="fa-solid fa-download" /> Brochure</a></h3>

      <h1 className="RetroRegisterLink" style={{ textAlign: 'center' }}><a href="\ContactUs" target={"_blank"}><i className="fa-solid fa-pen-to-square" /> Register for Demo &amp; More Details</a></h1>
    </>
  )
}


export default EvRetro