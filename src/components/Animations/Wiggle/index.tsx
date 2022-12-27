import { ReactNode } from "react";
import * as S from './style'

interface AnimationWiggleProps {
  children: ReactNode
}

export default function AnimationWiggle({ children }: AnimationWiggleProps) {
  return <S.WiggleStyle>
    {children}
  </S.WiggleStyle>
}
