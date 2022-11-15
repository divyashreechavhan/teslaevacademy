import React from 'react'
import "../App.css"


const Footer = () => {
  return (
    <>
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Address</h3>
                        <p>Head Office - Flat 11B, Darshan Park Building B, Behind Hotel Kunal, Kalewadi, Pimpri, Pune - 411017</p>
                    </div>
            
                    <div class="item col-sm-6 col-md-3 ">
                        <h3>Contact</h3>
                       
                        <p>Phone :
                   
                            <a href="tel:+919764001799"style={{color:"#f0f9ff" ,marginLeft:"3px" }}>+919764001799</a>
                    
                        </p>
                       <div className='email'>Email : 
                      
                        <a href="mailto:director@teslaevacademy.in?subject=Mail to EV Academy"
                        style={{color:"white",marginLeft:"3px" }} target="_blank">
                            director@teslaevacademy.in
                        </a>
                        </div>
                       
                    </div>
                    <div class="col-md-6 item text" >
                     
                        <a href='/Home'><img src="Images/Tesla1.png" alt="Tesla Ev Img" style={{width:"40%" , marginLeft:"-2%"}} /></a>
                        <p style={{marginTop:"-10px"}}>Managed by ,</p>
                        <h3> TESLA EV Academy India Private Limited</h3>
                    </div>
                    
                </div>
                <p class="copyright">Copyrights © 2022 Mr. Nitin Banait. All Rights Reserved</p>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    
    </>
  )
}

export default Footer