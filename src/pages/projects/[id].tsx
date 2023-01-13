import { useRouter } from 'next/router'
import { listProjectsMock } from '../../mock/projects'
import Head from 'next/head'
import ProjectPage from '../../components/ProjectPage'

export default function OneProject(){
  const { query } = useRouter()
  const id = query.id

  const project =  listProjectsMock.find(e=> e.id === parseInt(id as string))

  if(!project){
    return <>Não Encontrado</>
  }

  return <>
    <Head>
      <title>{project.title}</title>
    </Head>

    <ProjectPage project={project}/>
  </>
}
