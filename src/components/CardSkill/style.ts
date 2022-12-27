import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 2px solid aqua;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 225, 225, 0.1);
`
export const CardTop = styled.div`
  display: flex;
  flex: 1;
  justify-items: center;
  justify-content: center;
  align-items: center;
  min-width:100px;
  min-height: 150px;
`
export const CardBottom = styled.div.attrs((props:{
  backgroundColor: string
})=>props)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.backgroundColor ?? props.theme.colors.background};
  width: 100px;
  min-width: 250px;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
`
export const CardTitle = styled.h4.attrs((props:{
  color: string
})=>props)`
  font-size: ${props => props.theme.sizes.xl};
  color: ${props => props.color ?? props.theme.colors.text};
`
export const List = styled.ul.attrs((props:{
  color: string
})=>props)`
  font-size: ${props => props.theme.sizes.md};
  color: ${props => props.color ?? props.theme.colors.text};
  padding-left: 20px;
  padding-top: 20px;
`
