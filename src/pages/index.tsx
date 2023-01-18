import Banner from "../components/BannerHome";
import Contact from "../components/BannerContact";
import SoftSkills from "../components/SoftSkills";
import Skills from "../components/Skills";
import Projects from "../components/Projetcs";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../service/firebaseConnection";
import { useEffect, useState } from "react";
import { Project } from "../types/project";

const Home = () => {
  const [listprojects, setListProjects] = useState<Project[]>()


  const dbInstadbnce = collection(database, 'projects');
  async function loadProjects() {
    await getDocs(dbInstadbnce).then((data) => {
      var list:Project[] = []
      data.docs.map((e) => {
        let item = e.data();
        item["data"]['id'] = e.id
        list.push(item.data as Project)
      });
      setListProjects(list)
    })
  }

  useEffect(() => { loadProjects() }, [])

  return (
    <>
      <Banner />
      <SoftSkills />
      <Skills />
      <Projects projects={listprojects}/>
      <Contact />
    </>
  )
}

export default Home;

/* export const getStaticProps: GetStaticProps = async ()=>{

  return {
    props:{
      title:"Home"
    },
    revalidate: 60 * 60 // atualiza a cada
  }
}
 */
