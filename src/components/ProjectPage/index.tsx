import Image from "next/image";
import { Project } from "../../types/project";
import * as S from "./style";
import ListTecnology from "../ListTecnology";
import Gallery from "../Gallery";

interface ProjectPageProps {
  project: Project
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <S.Wrapper >
      <img src={project.banner} alt='banner' style={{ width: "100%", objectFit: "contain" }} />
      <S.Container>
        <S.Title>
          <h1>{project.title}</h1>
          <S.Badge private={project.isPrivate}>{project.isPrivate ? "Privado" : "Publico"}</S.Badge>
        </S.Title>
        <h3>{project.subtitle}</h3>
        <p>{project.descrição}</p>
        {project.link ? <S.Link href={project.link} target='_blank'>acessar o projeto</S.Link> : <></>}
        <ListTecnology technologies={project.technologies} />
        <Gallery gallery={project.gallery} />
      </S.Container>
    </S.Wrapper>
  )
}
