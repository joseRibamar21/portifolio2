import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(3rem);
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: calc(1rem);
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: calc(1rem);
`

export const Link = styled.a`
  color: #00ffee;
  font-style: italic
`

export const Badge = styled.div.attrs((props:{
  private: Boolean
})=>props)`
  border: 1px solid ${props=> props.private ? 'red' : 'green'};
  border-radius: 25px;
  padding: 5px;
  height: min-content;
  box-shadow: ${props=> !props.private ? '1px 1px 12px 1px rgba(50, 144, 15, 1)': '1px 1px 12px 1px rgba(144, 15, 17, 1)'};
  display: flex;
  justify-content: center;
  align-items: center;
`
