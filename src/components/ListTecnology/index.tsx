import Image from "next/image";
import * as S from "./style";

interface ListTecnologyProps {
  technologies:{
    name: string,
    link: string,
    logo: string
  }[]
}

export default function ListTecnology({ technologies }: ListTecnologyProps) {
  return (
    <S.Wrapper >
      {technologies.map(e=> {
        return <S.CardTecnology>
          <Image src={e.logo} alt="logo" width={36} height={36}/>
          <span>{e.name}</span>
        </S.CardTecnology>

      })}
    </S.Wrapper>
  )
}
