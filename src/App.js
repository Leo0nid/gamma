import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Federation from './pages/Federation';
import Fighters from './pages/Fighters';
import Events from './pages/Events';
import News from './pages/News';
import Couches from './pages/Couches';
import Online_store from './pages/Online_store';
import Home from './pages/Home';
import Footer from './pages/Footer';



import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import DonateCard from './components/DonateCard';

library.add(faEnvelope, faKey);



const App = () => {

  const [isShown, setIsShown] = useState(false)

  
  return (
    <Router>
      <Header setIsShown={setIsShown} />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/federation" element={<Federation/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/fighters" element={<Fighters/>}/>
      <Route path="/couches" element={<Couches/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/online_store" element={<Online_store/>}/>

    {/* <Route path="/donate" element={<Donate isShown={isShown} setIsShown={setIsShown}/>}/> */}
      </Routes>
     
      {
        isShown &&  <DonateCard />
      }
      <Footer/>
      
    </Router>
    // {
    //   isShown && <DonateCard setIsShown={setIsShown}/>
    // }
  )
}

export default App
