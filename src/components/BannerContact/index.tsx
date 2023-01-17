import * as S from "./style";

export default function Contact() {
  return (
    <S.Footer>
      <S.ButtonContact >Contatos</S.ButtonContact>
      <S.Content>
        (86) 9 9420-4632<br />
        jose.21rbrb@gmail.com
      </S.Content>
      <S.Row>
        <a href="https://www.linkedin.com/in/joser-ribamar" target="_blank" rel="noreferrer">
          <img src="assets/linkedin.png" alt="linkedin"></img>
        </a>
        <a href="https://instagram.com/dev_araujo?igshid=MDE2OWE1N2Q=" target="_blank" rel="noreferrer">
          <img src="assets/instagram.png" alt="instagram"></img>
        </a>
        <a href="mailto:jose.21rbrb@gmail.com" target="_blank" rel="noreferrer">
        <img src="assets/envelope.png" alt="envelope"></img>
        </a>
      </S.Row>
    </S.Footer>
  )
}
