import styled from "styled-components";


export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 60px 40px 20px 40px;
`
export const ButtonContact = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  justify-content: center;
  font-size: ${props=> props.theme.sizes["2xl"]};
  font-weight: 800;
  color: ${props=> props.theme.colors.background};
  width: 100%;
  padding: 10px 10px 10px 10px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding-top: 80px;
  font-size: ${props=> props.theme.sizes.xl};
  font-weight: 800;
  color: ${props=> props.theme.colors.text};
`
export const Row = styled.div`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 80px;
    justify-content: center;
    gap: calc(20px);
    img{
        width: 40px;
        height: 40px;
    }
`
