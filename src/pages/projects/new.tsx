import { addDoc, collection } from "firebase/firestore";
import { database } from "../../service/firebaseConnection";

export default function NewProjexts(){
  const dbInstance = collection(database, 'projects');

  function handleClick(){
    addDoc(dbInstance, {
      created: new Date(),
      data: {
        id: 5,
        title: "GitBlog",
        subtitle: "Pesquisa por issues e seus respectivos colaboradores de um projeto do Github.",
        descrição: "Desenvolvido em um curso de React.",
        banner: "/assets/gitblog_1.png",
        isPrivate: false,
        link: "https://github.com/joseRibamar21/gitblog",
        technologies: [
          {
            name: 'React',
            link: 'https://pt-br.reactjs.org/',
            logo: '/assets/react.png'
          },
          {
            name: 'Styled Componet',
            link: 'https://styled-components.com/',
            logo: '/assets/styled-components-logo.png'
          },
        ],
        gallery: [
          '/assets/gitblog_2.png',
          '/assets/gitblog_3.png',
        ]
      },
  }).then((e) => {
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
