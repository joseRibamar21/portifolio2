import { ReactNode } from "react";
import * as S from './style'

interface AnimationSpinProps {
  children: ReactNode
}

export default function AnimationSpin({children}:AnimationSpinProps){
  return <S.SpinStyle>
    {children}
  </S.SpinStyle>
}
