import React from 'react';
import MainSection from './components/MainSection';
import Service from './components/Service';
import Trusted from './components/Trusted';

const Home = () => {

  const data = {
    name: "Tata Store",
  }; 
  return <>
          <MainSection myData={data} />
          <Service />
          <Trusted />
        </> 
};


export default Home;
