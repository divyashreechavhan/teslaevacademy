import React from 'react'
import "./RoundCard.css"

const roundCard = () => {
  return (
   
    <>
   <hr style={{width: "80%" , marginLeft:"auto", marginRight:"auto" , border: "3px solid #4dbf1c"}} />

   <h3 className='globalTeamTitle'>Global Core Management Team</h3>

<div className='roundSection'>
<div className='roundImage'>

<img src="Images/NitinBanait.jpg" alt="img" />
<h4>Mr.Nitin Banait</h4>
<h6>Founder & CEO</h6>

</div>
<div className='roundImage'>

<img src="Images/PrashantNehete.jpeg" alt="img" />
<h4>Mr.Prashant Nehete</h4>
<h6>Co Founder & Global Director - EV with AI Franchise Network<br/>
Brand Name - TESLA EV Academy India Pvt Ltd</h6>

</div>
<div className='roundImage'>

<img src="Images/SivaKumar.jpeg" alt="img" />
<h4>Mr.Siva Kumar</h4>
<h6>Director - EV Simulation</h6>

</div>



</div>


<hr style={{width: "80%" , marginLeft:"auto", marginRight:"auto" , border: "3px solid #4dbf1c"}} />

    </>
  )
}

export default roundCard