import Image from "next/image";
import { Project } from "../../types/project";
import * as S from "./style";
import ListTecnology from "../ListTecnology";

interface ProjectPageProps {
  project: Project
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <S.Wrapper >
      <img src={project.banner} alt='banner' style={{ width: "100%", objectFit: "contain" }} />
      <S.Container>
        <h1>{project.title}</h1>
        <h3>{project.subtitle}</h3>
        <p>{project.descrição}</p>
        <ListTecnology technologies={project.technologies} />
      </S.Container>
    </S.Wrapper>
  )
}
