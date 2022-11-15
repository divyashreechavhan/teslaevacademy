import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import { BrowserRouter as Router , Switch , Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUS/AboutUs'
import ContactUs from './Components/ContactUs'
import EvCourses from './Pages/EvCourses';
import EvProducts from './Pages/EvProducts/EvProducts';
import Gallery from './Pages/Gallery/Gallery'
import EvApp from './Pages/EvExtras/EvApp'
import EvCoeMou from './Pages/EvExtras/EvCoeMou';
import EvFranchise from './Pages/EvExtras/EvFranchise'
import EvJobs from './Pages/EvExtras/EvJobs'
import EvOnlineTest from './Pages/EvExtras/EvOnlineTest'
import EvRetro from './Pages/EvExtras/EvRetro'
const App = () => {
  return (
    <Router>
     <Navbar />
     <Switch>
      <Route path = "/" exact component={Home}/>
      <Route path = "/AboutUs" exact component={AboutUs}/>
      <Route path = '/EvCourses' exact component={EvCourses}/>
      <Route path = "/ContactUs" exact component={ContactUs}/>
      <Route path = "/EvProducts" exact component={EvProducts}/>
      <Route path = "/Gallery" exact component={Gallery}/>
      <Route path = "/EvApp" exact component={EvApp}/>
      <Route path = "/EvCoeMou" exact component={EvCoeMou}/>
      <Route path = "/EvFranchise" exact component={EvFranchise}/>
      <Route path = "/EvJobs" exact component={EvJobs}/>
      <Route path = "/EvOnlineTest" exact component={EvOnlineTest}/>
      <Route path = "/EvRetro" exact component={EvRetro}/>
       <Redirect to = "/"></Redirect>
     </Switch>  
     <Footer/> 
    </Router> 
  )
}

export default App
