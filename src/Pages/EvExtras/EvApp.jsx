import React from 'react'
import "./EvApp.css"
import { Link } from 'react-router-dom'
const EvApp = () => {
  return (
    <>
      <h1 style={{ color: '#4dbf1c', fontWeight: 700, fontSize: '50px', textAlign: 'center', paddingBottom: '50px', paddingTop: '35px' }}>EV Apps</h1>

      <div className="row AppRow" style={{ paddingBottom: "50px",marginLeft:"0",marginRight:"0" }}>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card firstCard" style={{ marginLeft: "90px", width: "70%", height: "fit-content" }}>
            <img style={{ margin: "20px", }} src="Images\appCard1_img.png" alt="appCard1_img" />
              <a href="https://play.google.com/store/apps/details?id=technofront.tesla" target={"_blank"} type="submit">
                <button type="submit" class="btn btn-success btn-lg AppInstallBtn" >Install</button>
              </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card firstCard" style={{ marginLeft: "90px", width: "70%", height: "fit-content" }}>
            <img style={{ margin: "20px", }} src="Images\appCard2_img.png" alt="appCard2_img" />
              <a href="https://play.google.com/store/apps/details?id=com.himanshu.scooter&hl=en" target={"_blank"} type="submit">
                <button type="submit" class="btn btn-success btn-lg AppInstallBtn" >Install</button>
              </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default EvApp