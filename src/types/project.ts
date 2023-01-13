export type Project = {
  id: Number,
  title: string,
  subtitle: string,
  descrição: string,
  banner: string,
  isPrivate: boolean,
  link: string,
  technologies: {
    name: string,
    link: string,
    logo: string
  }[],
  gallery: string[]
}
