import Banner from "../components/BannerHome";
import Contact from "../components/BannerContact";
import SoftSkills from "../components/SoftSkills";
import Skills from "../components/Skills";
import Projects from "../components/Projetcs";

const Home = ()=>{
  return(
    <>
      <Banner />
      <SoftSkills/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home;
