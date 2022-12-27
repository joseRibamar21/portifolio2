import { Parallax } from "react-scroll-parallax";
import * as S from "./style";
import Image from "next/image";

export default function Banner() {

  return (
    <S.Container>
      <Parallax speed={-10}>
        <Image alt="Banner" width={1245} height={763.656} quality={100} style={{ width: "100%", minHeight: "700px", objectFit: "cover" }}
          src='/assets/banner.png' />
        <div style={{
          background: "rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 6, 16, 0.1) 40%, rgba(0, 6, 16, 0.1) 75%, rgba(0, 6, 16, 1) 100%) repeat scroll 0 0",
          position: "relative",
          marginTop: "-200px",
          height: "200px",
        }}>
        </div>
      </Parallax>
      <S.Row>
        <S.Column>
          <h1>
            José Ribamar
          </h1>
          <h2>
            Desenvolvedor Front-End
          </h2>
          <span>
            Amante da aréa da tecnologia<br />Cursando Ciencias da Computação-UFPI
          </span>
        </S.Column>
        <img style={{ width: "20%", minWidth: "300px", borderRadius: "20px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} src="/assets/jose2.png" alt="jose"></img>
      </S.Row>
    </S.Container>
  )
}
