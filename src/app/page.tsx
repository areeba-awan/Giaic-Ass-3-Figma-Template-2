import React from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import WorkTo from "./components/WorkTo";
import Extension from "./components/Extention";
import Cuztomize from "./components/Customize";
import EveryWork from "./components/EveryWork";
import Sponsers from "./components/Sponsers";
import Footer from "./components/Footer";


export default function Main(){
  return(
    <>
      <Navbar></Navbar>
      <Hero />
      <Project />
      <WorkTo />
      <Extension />
      <Cuztomize />
      <EveryWork />
      <Sponsers />
      <Footer />
    </>
  )
}