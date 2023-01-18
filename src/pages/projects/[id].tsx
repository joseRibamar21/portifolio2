import { useRouter } from 'next/router'
import { listProjectsMock } from '../../mock/projects'
import Head from 'next/head'
import ProjectPage from '../../components/ProjectPage'
import { GetServerSideProps } from 'next'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../../service/firebaseConnection'
import { Project } from '../../types/project'

interface OneProjectProps {
  project: Project
}

export default function OneProject({ project }: OneProjectProps){
  const { query } = useRouter()
  const id = query.id



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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const dbInstadbnce = collection(database, 'projects');
  const id = ctx.params?.id as string
  const queryProject = query(dbInstadbnce,where("__name__" , "==", id))
  var project: Project | null = null

  await getDocs(queryProject).then((data) => {
    data.docs.map((e) => {
        let item = e.data();
        item["data"]['id'] = e.id
        project = item.data as Project
    });
  })

  if (!project) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {project}
  }
}
