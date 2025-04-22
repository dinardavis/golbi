import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Benefits from './Benefits'
import Work from './Work'
import Pricing from './Pricing'
import Faqs from './Faqs'
import Footer from './Footer'
import Products from './Products'
import ServicesTicker from './ServicesTicker'


export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <Intro />
      <ServicesTicker />
      <Benefits />
      <Products />
      <Work />
      <Pricing />
      <Faqs />
      <Footer />
    </main>
  );
}