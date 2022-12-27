import * as S from "./style";
import CardProject from "../CardProjects";

export default function Projects() {

  const data = [
    {
      title: 'Potifolio',
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

  return (
    <S.Wrapper>
      <S.Button>
        Projetos
      </S.Button>
      <CardProject title={data[0].title} image={data[0].image} subtitle={data[0].subtitle}  color="#fff" />
      <S.List>
        {data.map((e, i) => {
          if (i !== 0) {
            return <div style={{maxWidth:"500px"}}><CardProject title={e.title} image={e.image} subtitle={e.subtitle}  color="#fff" /></div>
          }
        })}
      </S.List>
    </S.Wrapper>
  )
}
