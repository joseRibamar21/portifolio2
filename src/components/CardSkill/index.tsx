import { ReactNode } from "react"
import * as S from "./style";

interface CardSkillProps {
  title: string,
  skills: string[]
  color: string,
  background: string,
  children: ReactNode
}

export default function CardSkill({ title, skills, color, background, children }: CardSkillProps) {
  const styleCardCustom = {
    border: "2px solid " + background,
    boxShadow: "0 4px 30px " + background
  }

  const styleText = {
    color: color
  }

  const styleCardBgBottom = {
    backgroundColor: background
  }


  return (
    <S.Card style={styleCardCustom}>
      <S.CardTop>
        {children}
      </S.CardTop>
      <S.CardBottom backgroundColor={background}>
        <S.CardTitle style={styleText}>
          {title}
        </S.CardTitle>

        <S.List>
          {skills.map(e => {
            return <li key={e} style={styleText}>{e}</li>
          })}
        </S.List>
      </S.CardBottom>
    </S.Card>
  )
}
