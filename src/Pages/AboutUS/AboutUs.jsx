import React from 'react'
import "./AboutUs.css"
import TeamMembers from './teammembers'



const AboutUs = () => {
  return (
    <>
        
    
      <section class="fristsection">
      <h1 style={{ color: '#4dbf1c', fontWeight: 700, fontSize: '50px', textAlign: 'center', paddingBottom: '50px', paddingTop: '35px' }}>About Us</h1>
        <div class="main">

          <div class="secondhalf">
            <img src="Images/NitinBanait.jpg" alt="laptop img" height="200px" width="200px" />
            <h3 style={{textAlign:"center"}}>Nitin Banait</h3>
            <h6 style={{textAlign:"center"}}><b>Founder & CEO</b></h6>
          </div>
          <div class="fristhalf">
            {/* <p class="bigtext">The Future Of Education Is Here..!</p> */}
            <p class="smalltext"><b>TESLA EV Academy</b> brand is the brain-child of<b> Mr. Nitin Banait,</b> he has been in EV Industry for more than decade. Currently he is the Director of our prestigious academy. He has spent more than 4.5 years for his research work at from Indian Institute of Technology Mumbai, one of the premier Education Establishments of our country. Mr. Nitin is dedicated towards his work and want to develop a deep understanding of Electric Vehicle Industry among his students. He has inspired more than 5000 students from all over the country using his skills and understanding of the industry. He also lets his students take advantage of his network of thousands of professionals spread all across the globe to help them learn better. </p>
          </div>

        </div>
      </section>
      <hr />
      <hr />
      <div className='MotoPara' >

<h3 style={{ textAlign: "center", marginTop: "3%",marginBottom:"2%",color:"#4dbf1c" }}>OUR TEAM MOTO</h3>
<p style={{ textAlign: "justify" }}>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Mr. Nitin strongly believes in the harm caused by pollution of petrol/diesel vehicles, he urges his students to move towards electric vehicles. He is not only a teacher but a preacher too, he has driven more than 50000 kms on his personal E-Car, E-Scooter and E-Bike.
</p>
<p style={{ textAlign: "justify" }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Mr. Nitin has delivered several lectures and conducted workshops on several occasions in more than 50 colleges across the country. He has also been a consultant to several firms in our country and provided job guidance to aspirants. He is also a published researcher, he has published an ANSYS case study on Nuclear Power Plant and more than 10 research papers in National and International conferences.
</p>
<p style={{ textAlign: "justify" }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The Academy is a joint venture between <b>Rising Sun Technologies, Pune, M/s. Fedilae Electric, Pune & M/s. Envee Wheels Pvt Ltd,</b>  Pune will complement the strength of Technical Expertise & Manufacturing Excellence so that the<b> students/professionals will get hands on Electric Scooters, Bike and knowledge </b>about EV domain.

</p>


</div>
<hr/>
<hr/>


      <h2 style={{textAlign:"center" , marginTop:"2%" , marginBottom:"4%",color:"#4dbf1c"}}>Core Management Team</h2>
      <section className='secondSection'>
        <div class="secondSectionCard">
          <img src="Images/NirantPatil.jpg" alt="Avatar" style={{ marginTop: "3%", width: 224.49, marginLeft: "8%", height: 224.49 }} />
          <div class="container">
            <h4>Nirant Patil</h4>
            <p>Academic & Corporate Skill Accelerator - Director</p>
          </div>
        </div>
        <div class="secondSectionCard">
          <img src="Images/PrabhatRanjan.jpeg" alt="Avatar" style={{ marginTop: "3%", width: 224.49, marginLeft: "8%", height: 224.49 }} />
          <div class="container">
            <h4>Dr. Prabhat Ranjan</h4>
            <p>Skill Development - Director & Mentor</p>
          </div>
        </div>
        <div class="secondSectionCard">
          <img src="Images/udaySheore.jpg" alt="Avatar" style={{ marginTop: "3%", width: 224.49, marginLeft: "8%", height: 224.49 }} />
          <div class="container">
            <h4>Dr. Uday Sheore</h4>
            <p>Consultant - Renewable Energy & Agrowaste</p>
          </div>
        </div>
        <div class="secondSectionCard">
          <img src="Images/DnyaneshRathod.jpeg" alt="Avatar" style={{ marginTop: "3%", width: 224.49, marginLeft: "8%", height: 224.49 }} />
          <div class="container">
            <h4>Mr. Dnyanesh Rathod</h4>
            <p>Director</p>
          </div>
        </div>
      </section>
      <hr />
      <hr />

      <h2 style={{ textAlign: "center", marginTop: "3%",color:"#4dbf1c" }}>Advisory Management Board</h2>

      <section style={{ display: "flex" }}>

        <div class="secondMain">
          <div class="secondhalf">
            <img src="Images/NRamkrishnan.jpg" alt="laptop img" height="200px" width="200px" />
            <h6><b>Chairman - Advisory Board</b></h6>
          </div>
          <div class="fristhalf">
            {/* <p class="bigtext">The Future Of Education Is Here..!</p> */}
            <p class="smalltext"> <b>Prof. N. Ramakrishnan</b>
              <p>Chairman - Advisory Board<br />
                Professor (PhD), IIT, Gandhinagar<br />
                Sensors and Automation Expert<br />
                46 Years of IIT Teaching Experience</p></p>
          </div>
        </div>

        <div class="secondMain">
          <div class="secondhalf">
            <img src="Images/PrabhatRanjan.jpeg" alt="laptop img" height="200px" width="200px" />
            <h6><b>Skill Development - Director</b></h6>
          </div>
          <div class="fristhalf">
            {/* <p class="bigtext">The Future Of Education Is Here..!</p> */}
            <p class="smalltext"> <b>Dr. Prabhat Ranjan</b>
              <p>Skill Development - Director  <br />
                Skill Development - Mentor  <br />
                PhD - University of California, Berkeley<br />
              </p></p>
          </div>

        </div>

      </section>

      <hr />
      <hr />
  




      <h3 style={{ textAlign: "center", marginTop:"3%" , marginBottom:"2%",color:"#4dbf1c"}}>OUR TEAM MEMBERS</h3>
      <p style={{ textAlign: "center" }}><b>All our faculties are working closely on Electric Vehicles and are always updated with the latest trends in EV Industry.<br /> Some of us are in teaching industry for more than a decade.</b></p>


      <TeamMembers/>
      <hr/>
      <hr/>
  

    </>




  )
}

export default AboutUs