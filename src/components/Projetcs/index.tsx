import * as S from "./style";
import CardProject from "../CardProjects";
import { Project } from "../../types/project";

interface ProjectsProps{
  projects:Project[] | null | undefined
}

export default function Projects({projects}:ProjectsProps) {

  const data = [
    {
      title: 'Portifolio',
      subtitle: 'Meu espacinho para compartilhar meus projetos!',
      status: 'Em andamento',
      image: 'assets/portifolio.png',
    },
    {
      title: 'Partiu Jogar',
      subtitle: 'Sistema de marcação de quadras.',
      status: 'Em andamento',
      image: 'assets/partiu-jogar.png'
    },
    {
      title: 'Lidim Labs',
      subtitle: '',
      status: 'Em andamento',
      image: 'assets/lidium.png'
    },
    {
      title: 'NWL Esports',
      subtitle: 'Esse projeto faz parte da NLW e-Sports trilha Ignite promovido pela RocketSeat em Setembro de 2022.',
      status: 'Em andamento',
      image: 'assets/nwl_1.png'
    },

  ]

  if(!projects){
    return <span>Carregando...</span>
  }

  return (
    <S.Wrapper>
      <S.Button>
        Projetos
      </S.Button>
      <CardProject title={projects[0].title} image={projects[0].banner} subtitle={projects[0].subtitle}  color="#fff" />

      <S.List>
        {projects.map((e, i) => {
          if (i !== 0) {
            return <div style={{maxWidth:"500px"}}><CardProject title={e.title} image={e.banner} subtitle={e.subtitle}  color="#fff" /></div>
          }
        })}
      </S.List>
    </S.Wrapper>
  )
}
