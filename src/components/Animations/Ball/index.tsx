import { ReactNode } from "react";
import * as S from './style'

interface AnimationBallProps {
  children: ReactNode
}

export default function AnimationBall({children}:AnimationBallProps){
  return <S.BallStyle>
    {children}
  </S.BallStyle>
}
