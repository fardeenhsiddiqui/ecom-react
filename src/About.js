import MainSection from './components/MainSection';
import { useProductContext } from './context/productcontext';

const About = () => {

  const myName = useProductContext();
  const data = {
    name: "Tata E-commerce",
  }; 
 
  return (
    <>
      <h6>{myName.isError}</h6>
      <MainSection myData={data} />
    </>
  )

  
}

export default About
