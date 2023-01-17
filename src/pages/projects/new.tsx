import { addDoc, collection } from "firebase/firestore";
import { database } from "../../service/firebaseConnection";

export default function NewProjexts(){
  const dbInstance = collection(database, 'projects');

  function handleClick(){
    addDoc(dbInstance, {
      created: new Date(),
      data: {
        id: 3,
        title: "NWL Esports",
        subtitle: "Encontrando outros jogadores para aquela jogatina.",
        descrição: "Esse projeto faz parte da NLW e-Sports trilha Ignite promovido pela RocketSeat em Setembro de 2022.",
        banner: "/assets/nwl_1.png",
        isPrivate: false,
        link: "https://github.com/joseRibamar21/nwl_copa",
        technologies: [
          {
            name: 'React',
            link: 'https://pt-br.reactjs.org/',
            logo: '/assets/react.png'
          },
          {
            name: 'TypeScript',
            link: 'https://styled-components.com/',
            logo: '/assets/typescript-icon.png'
          },
          {
            name: 'Tailwindcss',
            link: 'https://tailwindcss.com/',
            logo: '/assets/tailwind-logo.png'
          },
          {
            name: 'Vite',
            link: 'https://vitejs.dev/',
            logo: '/assets/vite-logo.png'
          },
        ],
        gallery: [
          '/assets/nwl_2.png'
        ]
      },
  }).then((e) => {
      console.log(e)
      alert("Salvo")
  }).catch((err) => {
      alert(err)
  });
  }

  return(
    <>
      <button onClick={()=>handleClick()}>
        NewProject
      </button>
    </>
  )
}
