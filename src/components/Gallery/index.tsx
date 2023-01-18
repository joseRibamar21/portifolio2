import * as S from "./style";

interface GalleryProps {
  gallery: string[]
}

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <div>
      {gallery.length > 0 ? <h2>Galeria</h2> : <></>}
      <S.Wrapper >
        {gallery.map((e, i) => {
          return <img id={i + e} src={e} alt={`gallery` + i} style={{ borderRadius: '25px', maxWidth: "100%", objectFit: "contain" }} />

        })}
      </S.Wrapper>
    </div>
  )
}
