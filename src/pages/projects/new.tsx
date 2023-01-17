import { addDoc, collection } from "firebase/firestore";
import { database } from "../../service/firebaseConnection";

export default function NewProjexts(){
  const dbInstance = collection(database, 'projects');

  function handleClick(){
    /* addDoc(dbInstance, {
      created: new Date(),
      data: {
        id: 1,
        title: "Lidim Labs",
        subtitle: "Você não precisa ser um especialista em Bitcoin e Blockchain para entrar nesse universo.",
        descrição: "Encontre criptomoedas e tokens antes de serem listados em exchanges através do nosso banco de dados de projetos web3.",
        banner: "assets/lidium.png",
        isPrivate: true,
        link: "https://lidiumlabs.com/",
        technologies: [
          {
            name: 'NextJs',
            link: 'https://nextjs.org/',
            logo: '/assets/next-js-icon.png'
          },
          {
            name: 'Tailwindcss',
            link: 'https://tailwindcss.com/',
            logo: '/assets/tailwind-logo'
          },
          {
            name: 'TypeScript',
            link: 'https://styled-components.com/',
            logo: '/assets/typescript-icon.png'
          },
        ],
        gallery: []
      },
  }).then((e) => {
      console.log(e)
      alert("Salvo")
  }).catch((err) => {
      alert(err)
  }); */
  }

  return(
    <>
      <button onClick={()=>handleClick()}>
        NewProject
      </button>
    </>
  )
}
