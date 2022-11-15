import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function UncontrolledExample() {
    return (


        <Carousel style={{ width: "55%", marginTop: "4%", marginBottom: "4%", marginLeft: "auto", marginRight: "auto", display: "block", height: "400px" }} >

           
                <Carousel.Item>
                <Link to="PDFs/tesla.pdf">
                    <img
                        className="d-block w-100"
                        src="Images/EVCSB.png"
                        alt="First slide"
                        style={{ height: "400px" }}
                    />
                         </Link>
                    
                </Carousel.Item>
      

          
                <Carousel.Item>
                <Link to="PDFs/basic.pdf">
                    <img
                        className="d-block w-100"
                        src="Images/EVCSB2.png"
                        alt="Second slide"
                        style={{ height: "400px" }}
                    />
                       </Link>
                       

                </Carousel.Item>
         


           
                <Carousel.Item>
                <Link to="PDFs/basic.pdf">
                    <img
                        className="d-block w-100"
                        src="Images/EVCSB3.png"
                        alt="Third slide"
                        style={{ height: "400px" }}
                    />
                </Link>
                </Carousel.Item>



        </Carousel>
    );
}

export default UncontrolledExample;