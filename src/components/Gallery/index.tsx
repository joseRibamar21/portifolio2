import * as S from "./style";

interface GalleryProps {
  gallery: string[]
}

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <S.Wrapper >
      {gallery.length>0 ? <h2>Galeria</h2>:<></>}
      {gallery.map((e, i) => {
        return <img id={i + e} src={e} alt={`gallery` + i} style={{ maxWidth: "100%", objectFit: "contain" }} />

      })}
    </S.Wrapper>
  )
}
