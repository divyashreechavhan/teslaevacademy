import React from 'react'
import Allproducts from '../Components/Cards/CoursesCard/Allproducts'

const EvCourses = () => {
  return (
    <>
      <div>
        <p style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingBottom: '50px', paddingTop: '35px' }}> EV Courses</p>
        <Allproducts />
      </div>
      <h1 className="JobsRegisterLink" style={{ textAlign: 'center' }}><a href="\ContactUs" target={"_blank"}><i className="fa-solid fa-pen-to-square" /> Register for Demo &amp; More Details</a></h1>
    </>
  )
}

export default EvCourses