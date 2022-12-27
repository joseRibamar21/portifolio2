import style from "./style.module.scss";
import * as S from "./style";

interface CardProjectProps {
  title: string,
  subtitle: string,
  color: string
  image: string
}

export default function CardProject({ title, subtitle, color, image }: CardProjectProps) {

  return (
    <S.Card>
      <S.Image src={image}/>
      <S.Content >
        <S.Title color={color}>
          {title}
        </S.Title>
        <S.Body color={color}>
          {subtitle}
        </S.Body>
      </S.Content>
    </S.Card>
  )
}
