import React from "react";
import "./App.css";
import Header from './components/header'; 
import Banner from './components/banner'; 
import CoreFeature from './components/core-feature'; 
import CreateAccount from './components/create-account';
import PricingPlan from './components/princing-plan';
import PricingCard from './components/pricing-card';
import VideoCall from './components/video-call'
import Subscribe from './components/subscribe'
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CoreFeature/>
      <CreateAccount register={true} imagePath="/images/sing-up.png" text="Create Account" buttonColor="#80e0dd"/>
      <CreateAccount imagePath="/images/invite.png" text="Invite Friend" buttonColor="#ef7f65" order="order-1" order2="order-12"/>
      <PricingPlan/>
      <PricingCard/>
      <VideoCall/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
