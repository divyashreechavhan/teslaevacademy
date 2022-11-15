import React from 'react'
import './teammembers.css'
import About from './AboutUsApi'
import { useState } from 'react'

const TeamMembers = () => {

const[aboutData ,setAboutData] = useState(About);

  return (
    <>
    <div className='AllTeam' >
    {aboutData.map((curElem) => {
        const{
            NO , Photo , Name , Position , Designation
        } = curElem;
        return(
            <div class="card"style={{  width: 294.49 ,height:453.36 }} >
            <img src={Photo} class="card-img-top" alt="IMG"   style={{ width: 274.49, height: 224.49 }}         />
            <div class="card-body" style={{textAlign:"center"}}>
              <h4 class="card-text" style={{width:"110%" , marginLeft:"-3%", marginTop:"-1.5%"}} >{Name}</h4>
              <p class="card-text" style={{width:"110%" , marginLeft:"-3%", marginTop:"-1.5%"}}><b>{Position}</b></p>
              <h6 class="card-text" style={{width:"110%" , marginLeft:"-3%", marginTop:"-3%"}}>{Designation}</h6>
            </div>
          </div>
              

        )
    })}
    
   
    
    </div>
    
    </>
  )
}

export default TeamMembers