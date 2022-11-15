import React from 'react'
import "../App.css"
import IntroCards from '../Components/Cards/IntroCards'
import RoundCard from '../Components/Cards/RoundCard'
import Carousal from '../Components/Carousal/Carousal'
import ListHerosection from '../Components/ListHerosection/ListHerosection.js'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button'

const Home = () => {
  return (
    <>
      <Carousel className="topCarousal" style={{ width: "100%", height: "100%", }} >
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/Carausal1.jpg"
            alt="Second slide"
            style={{ height: "650px" }}
          />
          {/* <Carousel.Caption style={{marginBottom:"450px", color:"black",}}>
          <img src="Images/Tesla1.png" alt="" width={"240px"} />
            <h3><b>Tesla EV Private Limited India</b></h3>
            <p><b>One Of The Best Leading EV Compamy In Pune..!!</b></p>
          </Carousel.Caption>
           */}
          <Carousel.Caption style={{ marginBottom: "360px"  }}>
            <h2>The Future Of Electric Is Here!</h2>
            <p>Be a part of the population free environment.<br/>Where everyone gets a fresh air and and hustle free FUTURE.</p>
            <p><b>Connect With Us For More Further Details.</b></p>
            <Button variant="success">Connect With US</Button>{' '}
            <Button variant="success">Know More</Button>{' '}
          </Carousel.Caption>
        


        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/Scooter.jpg"
            alt="First slide"
            style={{ height: "650px" }}
          />
            <Carousel.Caption style={{ marginBottom: "400px" ,textAlign:"justify" }}>
            <h2>TESLA EV ACADEMY PVT LTD.</h2>
            <p>Brain child of Mr.Nitin Banait .<br/>Most Leading EV Company In Pune...!!
            </p>
          </Carousel.Caption>

           <Carousel.Caption style={{ marginBottom: "350px" , textAlign:"justify" }}>
            {/* <h2>The Future Of Electric Is Here!</h2> */}
            <p>Be a part of the population free environment.<br/>Where everyone gets a fresh air and and hustle free FUTURE.
            </p>
          </Carousel.Caption>
          <Carousel.Caption style={{ marginBottom: "290px" ,textAlign:"justify" }}>
            <h4>Invented. Reinvented. Electric.</h4>
            
            <Button variant="outline-info">Know More</Button>{' '}
        
            <Button variant="outline-info">About Us</Button>{' '}
        
            {/* <p>Be a part of the engine that powers the world.
            </p> */}
          </Carousel.Caption>
        
        </Carousel.Item>

      </Carousel>



      <ListHerosection />
      <IntroCards />
      <Carousal />
      <RoundCard />



    </>
  )
}

export default Home
