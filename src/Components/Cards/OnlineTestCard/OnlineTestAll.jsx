import React from 'react'
import TestCard from "./TestCard"
import './OnlineTestCard.css'
import Tests from "./ApiOnlineTestCard.js"
import { useState } from 'react'

const OnlineTestAll = () => {

  const [testsData, setTestsData] = useState(Tests);

  return (
    <>
      <h1 style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingBottom: '50px', paddingTop: '35px' }}>Online Test in EV Domain</h1>
      <h4 style={{ textAlign: "center", color: "#4dbf1c" }}>To Upgrade skill and knowledge in EV Domain</h4>
      <div className='AlltestDatas'>
        <TestCard testsData={testsData} />
      </div>

    </>
  )
}

export default OnlineTestAll
