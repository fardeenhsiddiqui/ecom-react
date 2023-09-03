import React from 'react';
import MainSection from './components/MainSection';
import Service from './components/Service';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {

  const data = {
    name: "Tata Store",
  }; 
  return <>
          <MainSection myData={data} />
          <FeatureProduct />
          <Service />
          <Trusted />
        </> 
};


export default Home;
