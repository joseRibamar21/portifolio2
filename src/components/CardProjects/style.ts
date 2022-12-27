import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 30px #000610;
  border-radius: 15px;
`

export const Image = styled.img.attrs((props:{})=>props)`
  position: relative;
  width: 100%;
  z-index: 9;
  border-radius: 15px 15px 0px 0px ;
  transition: transform .5s ease-in-out;
  transform: scale(1);
  transform-origin: 0 0;
  filter: brightness(80%);
`
export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #000610;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 15px 15px;
  padding: 10px;
`

export const Title = styled.h4.attrs((props:{
  color: string
})=>props)`
  color: ${props => props.color ?? props.theme.colors.background};
  font-size: ${props => props.theme.sizes.lg};
`
export const Body = styled.p.attrs((props:{
  color: string
})=>props)`
  color: ${props => props.color ?? props.theme.colors.background};
`
