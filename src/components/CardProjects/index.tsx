import style from "./style.module.scss";
import * as S from "./style";
import Link from "next/link";

interface CardProjectProps {
  id: string,
  title: string,
  subtitle: string,
  color: string
  image: string,
}

export default function CardProject({id, title, subtitle, color, image }: CardProjectProps) {

  return (
    <Link href={`/projects/${id}`}>
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
    </Link>
  )
}
